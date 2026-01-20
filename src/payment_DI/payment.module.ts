import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { PAYMENT_STRATEGIES } from './payment.tokens';

import { CardPaymentStrategy } from './strategies/card-payment.strategy';
import { UpiPaymentStrategy } from './strategies/upi-payment.strategy';
import { PaymentStrategy } from './strategies/payment-strategy.abstract';
import { CryptoPaymentStrategy } from './strategies/crypto-payment.strategy';

@Module({
  controllers: [PaymentController],
  providers: [
    PaymentService,

    // Concrete strategies
    CardPaymentStrategy,
    UpiPaymentStrategy,
    CryptoPaymentStrategy,

    // Factory provider
    {
      provide: PAYMENT_STRATEGIES,
      useFactory: (
        card: CardPaymentStrategy,
        upi: UpiPaymentStrategy,
        crypto: CryptoPaymentStrategy,
      ) => {
        return new Map<string, PaymentStrategy>([
          ['CARD', card],
          ['UPI', upi],
          ['CRYPTO', crypto],
        ]);
      },
      inject: [CardPaymentStrategy, UpiPaymentStrategy, CryptoPaymentStrategy],
    },
  ],
})
export class PaymentModule {}
