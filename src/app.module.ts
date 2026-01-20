import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaymentModule } from './payment/payment.module';
import { PaymentModule as PaymentModuleDI } from './payment_DI/payment.module';
import { NotificationModule } from './notifications/notification.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { FitnessModule } from './fitness/fitness.module';

@Module({
  imports: [
    EventEmitterModule.forRoot(), // 🔥 enables observer system
    PaymentModule,
    PaymentModuleDI,
    NotificationModule,
    FitnessModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
