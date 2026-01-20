import { Injectable } from '@nestjs/common';
import { PaymentRegistry } from './payment.registry';

@Injectable()
export class PaymentService {
  constructor(private readonly registry: PaymentRegistry) {}

  makePayment(method: string, amount: number): string {
    const strategy = this.registry.getStrategy(method);
    return strategy.pay(amount);
  }
}

// This is how it would look without Strategy / Registry.

// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class PaymentService {
//   makePayment(method: string, amount: number): string {
//     if (method === 'CARD') {
//       return `Paid ₹${amount} using Card`;
//     }

//     if (method === 'UPI') {
//       return `Paid ₹${amount} using UPI`;
//     }

//     if (method === 'CRYPTO') {
//       return `Paid ₹${amount} using Crypto`;
//     }

//     throw new Error(`Payment method ${method} not supported`);
//   }
// }

// 🚨 Why This Violates Open–Closed Principle
// 1️⃣ Not closed for modification

// Every time you add:

// Wallet

// NetBanking

// PayPal

// You must edit this file.

// 2️⃣ High regression risk

// Touching existing logic can break old payments

// No isolation of behavior

// 3️⃣ Tight coupling

// PaymentService knows:

// All payment types

// All implementation details

// It’s doing too much.

// 4️⃣ Grows endlessly

// This file becomes a God class.
