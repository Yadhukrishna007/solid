// products/email.notification.ts
import { Notification } from './notification.interface';

export class EmailNotification implements Notification {
  send(message: string): void {
    console.log(`📧 Email sent: ${message}`);
  }
}
