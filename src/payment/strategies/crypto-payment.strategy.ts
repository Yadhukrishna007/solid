import { Injectable } from '@nestjs/common';
import { PaymentStrategy } from './payment-strategy.interface';

@Injectable()
export class CryptoPaymentStrategy implements PaymentStrategy {
  pay(amount: number): string {
    return `Paid ₹${amount} using Crypto`;
  }
}
