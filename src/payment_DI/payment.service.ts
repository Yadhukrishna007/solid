import { Inject, Injectable } from '@nestjs/common';
import { PAYMENT_STRATEGIES } from './payment.tokens';
import { PaymentStrategy } from './strategies/payment-strategy.abstract';

@Injectable()
export class PaymentService {
  constructor(
    @Inject(PAYMENT_STRATEGIES)
    private readonly strategies: Map<string, PaymentStrategy>,
  ) {}

  pay(method: string, amount: number): string {
    const strategy = this.strategies.get(method.toUpperCase());

    if (!strategy) {
      throw new Error(`Payment method ${method} not supported`);
    }

    return strategy.pay(amount);
  }
}
