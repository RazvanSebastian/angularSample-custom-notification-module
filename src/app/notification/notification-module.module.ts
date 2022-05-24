import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NotificationsComponent } from "./component/notifications.component";

@NgModule({
  imports: [CommonModule],
  declarations: [NotificationsComponent],
  exports: [NotificationsComponent]
})
export class NotificationModule { }
