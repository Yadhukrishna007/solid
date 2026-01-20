import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { PaymentRegistry } from './payment.registry';

import { CardPaymentStrategy } from './strategies/card-payment.strategy';
import { UpiPaymentStrategy } from './strategies/upi-payment.strategy';
import { CryptoPaymentStrategy } from './strategies/crypto-payment.strategy';

@Module({
  controllers: [PaymentController],
  providers: [
    PaymentService,
    PaymentRegistry,
    CardPaymentStrategy,
    UpiPaymentStrategy,
    CryptoPaymentStrategy,
  ],
})
export class PaymentModule {}
