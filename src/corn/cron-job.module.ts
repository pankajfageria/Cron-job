// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { ScheduleModule } from '@nestjs/schedule';
// import { ThrottlerModule } from '@nestjs/throttler';
// import { CronJobService } from './cron-job.service';
// import { CronJobController } from './cron-job.controller';
// import { CronJob, CronJobSchema } from './schemas/cron-job.schema';
// import { Webhook, WebhookSchema } from './schemas/webhook.schema';

// @Module({
//   imports: [
//     MongooseModule.forFeature([{ name: CronJob.name, schema: CronJobSchema }]),
//     MongooseModule.forFeature([{ name: Webhook.name, schema: WebhookSchema }]),
//     ScheduleModule.forRoot(),
//     ThrottlerModule.forRoot({
//       ttl: 60,
//       limit: 10,
//     }),
//   ],
//   controllers: [CronJobController],
//   providers: [CronJobService],
// })
// export class CronJobModule {}



import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerModule } from '@nestjs/throttler';
import { CronJobService } from './cron-job.service';
import { CronJobController } from './cron-job.controller';
import { CronJob, CronJobSchema } from './schemas/cron-job.schema';
import { Webhook, WebhookSchema } from './schemas/webhook.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CronJob.name, schema: CronJobSchema }]),
    MongooseModule.forFeature([{ name: Webhook.name, schema: WebhookSchema }]),
    ScheduleModule.forRoot(),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
  ],
  controllers: [CronJobController],
  providers: [CronJobService],
})
export class CronJobModule {}
