import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { NotificationPayload } from '../notifications.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private _notifications$ = new ReplaySubject<NotificationPayload>();

  constructor() { }

  public get notifications$() {
    return this._notifications$;
  }

  public emitNotification(notificationPayload: NotificationPayload) {
    this._notifications$.next(notificationPayload);
  }
}
