import { Injectable } from '@nestjs/common';
import { PaymentStrategy } from './payment-strategy.abstract';

@Injectable()
export class UpiPaymentStrategy extends PaymentStrategy {
  pay(amount: number): string {
    return `Paid ₹${amount} using UPI`;
  }
}
