import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class GoalNotifierListener {
  constructor() {
    console.log('✅ GoalNotifierListener LOADED');
  }
  private readonly stepGoal = 10000;
  private goalReached = false;

  @OnEvent('fitness.updated')
  handleFitnessUpdate(payload: {
    steps: number;
    activeMinutes: number;
    calories: number;
  }) {
    if (payload.steps >= this.stepGoal && !this.goalReached) {
      console.log(`🎉 Goal reached! ${this.stepGoal} steps`);
      this.goalReached = true;
    }
  }

  @OnEvent('fitness.reset')
  handleReset() {
    console.log('GoalNotifier → Resetting goal state');
    this.goalReached = false;
  }
}
