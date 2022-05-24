import { Component, OnInit } from '@angular/core';
import { NotificationPayload, NotificationType } from '../notification/notifications.model';
import { NotificationService } from '../notification/service/notification.service';

@Component({
  selector: 'app-first-dummy',
  templateUrl: './first-dummy.component.html',
  styleUrls: ['./first-dummy.component.css']
})
export class FirstDummyComponent implements OnInit {
  public readonly successType = NotificationType.SUCCESS;
  public readonly dangerType = NotificationType.DANGER;
  public readonly warningType = NotificationType.WARNING;
  public readonly primaryType = NotificationType.PRIMARY;

  items: string[] = [];

  counter = 0;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.items = Array.from(Array(100).keys()).map(value => "value" + value)
  }

  sendNotification(type: NotificationType) {
    this.counter += 1;
    this.notificationService.emitNotification({ message: "Test message" + this.counter, type } as NotificationPayload)
  }
}
