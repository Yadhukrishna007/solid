import { Body, Controller, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  pay(@Body('method') method: string, @Body('amount') amount: number) {
    return this.paymentService.makePayment(method, amount);
  }
}
