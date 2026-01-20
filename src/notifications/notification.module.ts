// notification.module.ts
import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';

import { EmailNotificationCreator } from './creators/email.creator';
import { SMSNotificationCreator } from './creators/sms.creator';
import { PushNotificationCreator } from './creators/push.creator';
import { SlackNotificationCreator } from './creators/slack.creator';

@Module({
  controllers: [NotificationController],
  providers: [
    NotificationService,
    EmailNotificationCreator,
    SMSNotificationCreator,
    PushNotificationCreator,
    SlackNotificationCreator,
  ],
})
export class NotificationModule {}
