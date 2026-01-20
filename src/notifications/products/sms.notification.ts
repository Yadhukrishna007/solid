// products/sms.notification.ts
import { Notification } from './notification.interface';

export class SMSNotification implements Notification {
  send(message: string): void {
    console.log(`📱 SMS sent: ${message}`);
  }
}
