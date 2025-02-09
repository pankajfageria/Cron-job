import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CronJobModule } from './corn/cron-job.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    CronJobModule,
  ],
})
export class AppModule {}
