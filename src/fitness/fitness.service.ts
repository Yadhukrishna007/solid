import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

//  npm install @nestjs/event-emitter

@Injectable()
export class FitnessService {
  constructor(private readonly eventEmitter: EventEmitter2) {}

  pushNewData(steps: number, activeMinutes: number, calories: number) {
    console.log(
      `FitnessService → New data: Steps=${steps}, ActiveMinutes=${activeMinutes}, Calories=${calories}`,
    );

    // 🔔 Notify observers
    this.eventEmitter.emit('fitness.updated', {
      steps,
      activeMinutes,
      calories,
    });
  }

  dailyReset() {
    console.log('FitnessService → Daily reset');

    this.eventEmitter.emit('fitness.reset');
  }
}
