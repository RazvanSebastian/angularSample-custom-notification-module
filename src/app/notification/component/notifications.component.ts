import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { NotificationPayload, NOTIFICATION_CLASSES } from '../notifications.model';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit, OnDestroy {
  private threshold: number = 5;
  private unsubscribe$ = new Subject();
  notifications: NotificationPayload[] = [];

  constructor(
    private notificationService: NotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initNotificationsHandlingOnRouterEvents();
    this.initNotificationsHandlingOnPushNotification();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public manuallyClosing(notification: NotificationPayload) {
    if (this.notifications.includes(notification)) {
      clearTimeout((notification as any).uuid);
      this.notifications = this.notifications.filter(n => n !== notification);
    }
  }

  public getCssClasses(notification: NotificationPayload) {
    if (!notification) return;

    let classes = NOTIFICATION_CLASSES.get(notification.type) + " opacity";

    if (notification.fade) {
      classes += " fade";
    }

    return classes;
  }

  private initNotificationsHandlingOnRouterEvents() {
    this.router.events.pipe(
      takeUntil(this.unsubscribe$),
      filter(event => event instanceof NavigationStart)
    ).subscribe(() => {
      this.notifications
        .forEach(navigation => {
          this.manuallyClosing(navigation);
          this.notifications = [];
        })
    })
  }

  private initNotificationsHandlingOnPushNotification() {
    this.notificationService.notifications$
      .pipe(
        takeUntil(this.unsubscribe$),
      )
      .subscribe(notification => {
        if (this.notifications.length >= this.threshold) {
          this.manuallyClosing(this.notifications[0]);
        }
        this.notifications.push(notification);
        this.autoClosing(notification);
      });
  }

  private autoClosing(notification: NotificationPayload) {
    const uuid = setTimeout(() => {
      if (this.notifications.includes(notification)) {
        // trigger change detection
        notification.fade = true;
        // remove from notifications list with fade
        setTimeout(() => {
          this.notifications = this.notifications.filter(n => n !== notification);
        }, 250);
      }
    }, 3000);
    notification.timeoutUUID = uuid;
  }

}
