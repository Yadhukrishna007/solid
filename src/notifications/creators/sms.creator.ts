import { Injectable } from '@nestjs/common';
import { SMSNotification } from '../products/sms.notification';
import { NotificationCreator } from './notification.creator';

@Injectable()
export class SMSNotificationCreator extends NotificationCreator {
  createNotification() {
    return new SMSNotification();
  }
}
