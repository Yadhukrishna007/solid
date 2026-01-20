import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { PaymentModule as PaymentModuleDI } from './payment_DI/payment.module';
import { NotificationModule } from './notifications/notification.module';

@Module({
  imports: [PaymentModule, PaymentModuleDI, NotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
