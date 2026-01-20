import { Module } from '@nestjs/common';
import { FitnessService } from './fitness.service';
import { FitnessController } from './fitness.controller';
import { GoalNotifierListener } from './listeners/goal-notifier.listener';

@Module({
  controllers: [FitnessController],
  providers: [FitnessService, GoalNotifierListener],
})
export class FitnessModule {}
