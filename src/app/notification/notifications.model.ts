export interface NotificationPayload {
  message: string;
  type: NotificationType
  fade: boolean;
  timeoutUUID: any;
}

export enum NotificationType {
  PRIMARY, SUCCESS, WARNING, DANGER
}

export const NOTIFICATION_CLASSES: Map<NotificationType, string> = new Map([
  [NotificationType.PRIMARY, "alert alert-primary alert-dismissable"],
  [NotificationType.SUCCESS, "alert alert-success alert-dismissable"],
  [NotificationType.WARNING, "alert alert-warning alert-dismissable"],
  [NotificationType.DANGER, "alert alert-danger alert-dismissable"]
])
