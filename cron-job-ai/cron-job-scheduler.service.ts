// cron-job-scheduler.service.ts
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { CronJobService } from './cron-job.service';

@Injectable()
export class CronJobSchedulerService {
  constructor(private readonly cronJobService: CronJobService) {}

  @Cron(CronExpression.EVERY_10_SECONDS) // You can define the schedule dynamically based on cronJob.schedule
  async handleCronJobs() {
    // Logic to run jobs based on cronJob.schedule
    const jobs = await this.cronJobService.getAllCronJobs();
    for (const job of jobs) {
      // Execute the job and store its response
      // Trigger the cron job
      this.triggerCronJob(job);
    }
  }

  async triggerCronJob(job) {
    // Trigger the cron job via the defined link and API key, log the response to the history
  }
}
