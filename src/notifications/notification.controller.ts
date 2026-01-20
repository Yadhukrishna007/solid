// controller/notification.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('email')
  sendEmail(@Body('message') message: string) {
    this.notificationService.sendEmail(message);
    return { status: 'Email sent' };
  }

  @Post('sms')
  sendSMS(@Body('message') message: string) {
    this.notificationService.sendSMS(message);
    return { status: 'SMS sent' };
  }

  @Post('push')
  sendPush(@Body('message') message: string) {
    this.notificationService.sendPush(message);
    return { status: 'Push sent' };
  }

  @Post('slack')
  sendSlack(@Body('message') message: string) {
    this.notificationService.sendSlack(message);
    return { status: 'Slack sent' };
  }
}
