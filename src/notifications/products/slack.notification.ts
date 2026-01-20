// products/slack.notification.ts
import { Notification } from './notification.interface';

export class SlackNotification implements Notification {
  send(message: string): void {
    console.log(`💬 Slack sent: ${message}`);
  }
}
