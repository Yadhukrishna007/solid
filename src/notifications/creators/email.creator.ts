// creators/email.creator.ts
import { Injectable } from '@nestjs/common';
import { NotificationCreator } from './notification.creator';
import { EmailNotification } from '../products/email.notification';

@Injectable()
export class EmailNotificationCreator extends NotificationCreator {
  createNotification() {
    return new EmailNotification();
  }
}
