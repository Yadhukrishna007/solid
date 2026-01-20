import { Injectable } from '@nestjs/common';
import { PaymentStrategy } from './strategies/payment-strategy.interface';
import { CardPaymentStrategy } from './strategies/card-payment.strategy';
import { UpiPaymentStrategy } from './strategies/upi-payment.strategy';
import { CryptoPaymentStrategy } from './strategies/crypto-payment.strategy';

@Injectable()
export class PaymentRegistry {
  private readonly strategies = new Map<string, PaymentStrategy>();

  constructor(
    card: CardPaymentStrategy,
    upi: UpiPaymentStrategy,
    crypto: CryptoPaymentStrategy,
  ) {
    this.strategies.set('CARD', card);
    this.strategies.set('UPI', upi);
    this.strategies.set('CRYPTO', crypto);
  }

  //   After constructor runs, the map looks like:

  // {
  //   "CARD"   → CardPaymentStrategy instance
  //   "UPI"    → UpiPaymentStrategy instance
  //   "CRYPTO" → CryptoPaymentStrategy instance
  //}

  getStrategy(method: string): PaymentStrategy {
    const strategy = this.strategies.get(method.toUpperCase());

    if (!strategy) {
      throw new Error(`Payment method ${method} not supported`);
    }

    return strategy;
  }
}
