// creators/push.creator.ts
import { NotificationCreator } from './notification.creator';
import { PushNotification } from '../products/push.notification';

export class PushNotificationCreator extends NotificationCreator {
  createNotification() {
    return new PushNotification();
  }
}
