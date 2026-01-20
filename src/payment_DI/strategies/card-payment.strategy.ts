import { Injectable } from '@nestjs/common';
import { PaymentStrategy } from './payment-strategy.abstract';

@Injectable()
export class CardPaymentStrategy extends PaymentStrategy {
  pay(amount: number): string {
    return `Paid ₹${amount} using Card ✅`;
  }
}
