// cron-job.service.ts
import { Injectable } from '@nestjs/common';
import { CronJob } from './schemas/cron-job.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CronJobService {
  constructor(@InjectModel(CronJob.name) private cronJobModel: Model<CronJob>) {}

  async createCronJob(createCronJobDto): Promise<CronJob> {
    const cronJob = new this.cronJobModel(createCronJobDto);
    return cronJob.save();
  }

  async updateCronJob(id: string, updateCronJobDto): Promise<CronJob> {
    return this.cronJobModel.findByIdAndUpdate(id, updateCronJobDto, { new: true });
  }

  async deleteCronJob(id: string): Promise<void> {
    await this.cronJobModel.findByIdAndDelete(id);
  }

  async getAllCronJobs(): Promise<CronJob[]> {
    return this.cronJobModel.find().exec();
  }

  // Method to run cron jobs based on schedule
  runCronJobs() {
    // Implement the logic to check cron schedules and trigger jobs
  }
}
