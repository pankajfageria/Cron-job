// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { CronJob } from './schemas/cron-job.schema';
// import { Webhook } from './schemas/webhook.schema';
// import { CreateCronJobDto } from './dto/create-cron-job.dto';
// import { UpdateCronJobDto } from './dto/update-cron-job.dto';

// @Injectable()
// export class CronJobService {
//   constructor(
//     @InjectModel(CronJob.name) private cronJobModel: Model<CronJob>,
//     @InjectModel(Webhook.name) private webhookModel: Model<Webhook>,
//   ) {}

//   async create(createCronJobDto: CreateCronJobDto): Promise<CronJob> {
//     const createdCronJob = new this.cronJobModel(createCronJobDto);
//     return createdCronJob.save();
//   }

//   async findAll(): Promise<CronJob[]> {
//     return this.cronJobModel.find().exec();
//   }

//   async findOne(id: string): Promise<CronJob> {
//     const cronJob = await this.cronJobModel.findById(id).exec();
//     if (!cronJob) {
//       throw new NotFoundException(`CronJob #${id} not found`);
//     }
//     return cronJob;
//   }

//   async update(id: string, updateCronJobDto: UpdateCronJobDto): Promise<CronJob> {
//     const updatedCronJob = await this.cronJobModel
//       .findByIdAndUpdate(id, updateCronJobDto, { new: true })
//       .exec();
//     if (!updatedCronJob) {
//       throw new NotFoundException(`CronJob #${id} not found`);
//     }
//     return updatedCronJob;
//   }

//   async remove(id: string): Promise<CronJob> {
//     const deletedCronJob = await this.cronJobModel.findByIdAndDelete(id).exec();
//     if (!deletedCronJob) {
//       throw new NotFoundException(`CronJob #${id} not found`);
//     }
//     return deletedCronJob;
//   }
  

//   async createWebhook(data: string, cronJobId: string): Promise<Webhook> {
//     const webhook = new this.webhookModel({ data, cronJobId });
//     return webhook.save();
//   }

//   async findAllWebhooks(): Promise<Webhook[]> {
//     return this.webhookModel.find().exec();
//   }
// }



import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CronJob } from './schemas/cron-job.schema';
import { Webhook } from './schemas/webhook.schema';
import { CreateCronJobDto } from './dto/create-cron-job.dto';
import { UpdateCronJobDto } from './dto/update-cron-job.dto';

@Injectable()
export class CronJobService {
  constructor(
    @InjectModel(CronJob.name) private cronJobModel: Model<CronJob>,
    @InjectModel(Webhook.name) private webhookModel: Model<Webhook>,
  ) {}

  async create(createCronJobDto: CreateCronJobDto): Promise<CronJob> {
    const createdCronJob = new this.cronJobModel(createCronJobDto);
    return createdCronJob.save();
  }

  async findAll(): Promise<CronJob[]> {
    return this.cronJobModel.find().exec();
  }

  async findOne(id: string): Promise<CronJob> {
    const cronJob = await this.cronJobModel.findById(id).exec();
    if (!cronJob) {
      throw new NotFoundException(`CronJob #${id} not found`);
    }
    return cronJob;
  }

  async update(id: string, updateCronJobDto: UpdateCronJobDto): Promise<CronJob> {
    const existingCronJob = await this.cronJobModel.findByIdAndUpdate(
      id,
      updateCronJobDto,
      { new: true },
    ).exec();
    if (!existingCronJob) {
      throw new NotFoundException(`CronJob #${id} not found`);
    }
    return existingCronJob;
  }

  async remove(id: string): Promise<CronJob> {
    const deletedCronJob = await this.cronJobModel.findByIdAndDelete(id).exec();
    if (!deletedCronJob) {
      throw new NotFoundException(`CronJob #${id} not found`);
    }
    return deletedCronJob;
  }

  async createWebhook(data: string, cronJobId: string): Promise<Webhook> {
    const webhook = new this.webhookModel({ data, cronJob: cronJobId });
    return webhook.save();
  }

  async findAllWebhooks(): Promise<Webhook[]> {
    return this.webhookModel.find().exec();
  }
}
