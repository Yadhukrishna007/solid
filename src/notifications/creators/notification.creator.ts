// creators/notification.creator.ts
import { Notification } from '../products/notification.interface';

export abstract class NotificationCreator {
  abstract createNotification(): Notification;

  send(message: string): void {
    const notification = this.createNotification();
    notification.send(message);
  }
}
