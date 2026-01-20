import { Injectable } from '@nestjs/common';
import { PaymentStrategy } from './payment-strategy.interface';

@Injectable()
export class UpiPaymentStrategy implements PaymentStrategy {
  pay(amount: number): string {
    return `Paid ₹${amount} using UPI`;
  }
}
