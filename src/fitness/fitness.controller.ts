import { Body, Controller, Post } from '@nestjs/common';
import { FitnessService } from './fitness.service';

// “In NestJS, we usually implement Observer Pattern
// using EventEmitter or domain events instead of manual observer registration.”

@Controller('fitness')
export class FitnessController {
  constructor(private readonly fitnessService: FitnessService) {}

  @Post('update')
  updateFitness(
    @Body()
    body: {
      steps: number;
      activeMinutes: number;
      calories: number;
    },
  ) {
    this.fitnessService.pushNewData(
      body.steps,
      body.activeMinutes,
      body.calories,
    );

    return { message: 'Fitness data updated' };
  }

  @Post('reset')
  resetDay() {
    this.fitnessService.dailyReset();
    return { message: 'Daily reset done' };
  }
}
