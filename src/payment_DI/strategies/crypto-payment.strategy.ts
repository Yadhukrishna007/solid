import { Injectable } from '@nestjs/common';
import { PaymentStrategy } from './payment-strategy.abstract';

@Injectable()
export class CryptoPaymentStrategy extends PaymentStrategy {
  pay(amount: number): string {
    return `Paid ₹${amount} using Crypto`;
  }
}
