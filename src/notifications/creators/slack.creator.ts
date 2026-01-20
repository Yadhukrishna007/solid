// creators/slack.creator.ts
import { NotificationCreator } from './notification.creator';
import { SlackNotification } from '../products/slack.notification';

export class SlackNotificationCreator extends NotificationCreator {
  createNotification() {
    return new SlackNotification();
  }
}
