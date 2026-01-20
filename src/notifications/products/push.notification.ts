// products/push.notification.ts
import { Notification } from './notification.interface';

export class PushNotification implements Notification {
  send(message: string): void {
    console.log(`🔔 Push sent: ${message}`);
  }
}
