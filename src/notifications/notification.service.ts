// notification.service.ts
import { Injectable } from '@nestjs/common';
import { EmailNotificationCreator } from './creators/email.creator';
import { SMSNotificationCreator } from './creators/sms.creator';
import { PushNotificationCreator } from './creators/push.creator';
import { SlackNotificationCreator } from './creators/slack.creator';

@Injectable()
export class NotificationService {
  constructor(
    private readonly emailCreator: EmailNotificationCreator,
    private readonly smsCreator: SMSNotificationCreator,
    private readonly pushCreator: PushNotificationCreator,
    private readonly slackCreator: SlackNotificationCreator,
  ) {}

  sendEmail(message: string) {
    this.emailCreator.send(message);
  }

  sendSMS(message: string) {
    this.smsCreator.send(message);
  }

  sendPush(message: string) {
    this.pushCreator.send(message);
  }

  sendSlack(message: string) {
    this.slackCreator.send(message);
  }
}
