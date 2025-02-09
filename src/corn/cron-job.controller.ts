// import {
//     Controller,
//     Get,
//     Post,
//     Body,
//     Patch,
//     Param,
//     Delete,
//     UseInterceptors,
//     ClassSerializerInterceptor,
//     UseGuards,
//   } from '@nestjs/common';
//   import { CronJobService } from './cron-job.service';
//   import { CreateCronJobDto } from './dto/create-cron-job.dto';
//   import { UpdateCronJobDto } from './dto/update-cron-job.dto';
//   import { Throttle, ThrottlerGuard } from '@nestjs/throttler';
  
//   @Controller('cron-jobs')
//   @UseInterceptors(ClassSerializerInterceptor)
//   @UseGuards(ThrottlerGuard)
//   export class CronJobController {
//     constructor(private readonly cronJobService: CronJobService) {}
  
//     @Post()
//     create(@Body() createCronJobDto: CreateCronJobDto) {
//       return this.cronJobService.create(createCronJobDto);
//     }
  
//     @Get()
//     findAll() {
//       return this.cronJobService.findAll();
//     }
  
//     @Get(':id')
//     findOne(@Param('id') id: string) {
//       return this.cronJobService.findOne(id);
//     }
  
//     @Patch(':id')
//     update(@Param('id') id: string, @Body() updateCronJobDto: UpdateCronJobDto) {
//       return this.cronJobService.update(id, updateCronJobDto);
//     }
  
//     @Delete(':id')
//     remove(@Param('id') id: string) {
//       return this.cronJobService.remove(id);
//     }
  
//     @Post('webhook/:cronJobId')
//     @Throttle({ limit: 5, ttl: 60 })
//     createWebhook(@Body('data') data: string, @Param('cronJobId') cronJobId: string) {
//       return this.cronJobService.createWebhook(data, cronJobId);
//     }
    
    
  
//     @Get('webhooks')
//     findAllWebhooks() {
//       return this.cronJobService.findAllWebhooks();
//     }
//   }
  


// import {
//     Controller,
//     Get,
//     Post,
//     Body,
//     Patch,
//     Param,
//     Delete,
//     UseInterceptors,
//     ClassSerializerInterceptor,
//     UseGuards,
//   } from '@nestjs/common';
//   import { CronJobService } from './cron-job.service';
//   import { CreateCronJobDto } from './dto/create-cron-job.dto';
//   import { UpdateCronJobDto } from './dto/update-cron-job.dto';
//   import { Throttle, ThrottlerGuard } from '@nestjs/throttler';
  
//   @Controller('cron-jobs')
//   @UseInterceptors(ClassSerializerInterceptor)
//   @UseGuards(ThrottlerGuard)
//   export class CronJobController {
//     constructor(private readonly cronJobService: CronJobService) {}
  
//     @Post()
//     create(@Body() createCronJobDto: CreateCronJobDto) {
//       return this.cronJobService.create(createCronJobDto);
//     }
  
//     @Get()
//     findAll() {
//       return this.cronJobService.findAll();
//     }
  
//     @Get(':id')
//     findOne(@Param('id') id: string) {
//       return this.cronJobService.findOne(id);
//     }
  
//     @Patch(':id')
//     update(@Param('id') id: string, @Body() updateCronJobDto: UpdateCronJobDto) {
//       return this.cronJobService.update(id, updateCronJobDto);
//     }
  
//     @Delete(':id')
//     remove(@Param('id') id: string) {
//       return this.cronJobService.remove(id);
//     }
  
//     @Post('webhook/:cronJobId')
//     @Throttle({ limit: 5, ttl: 60 })
//     createWebhook(@Body('data') data: string, @Param('cronJobId') cronJobId: string) {
//       return this.cronJobService.createWebhook(data, cronJobId);
//     }
  
//     @Get('webhooks')
//     findAllWebhooks() {
//       return this.cronJobService.findAllWebhooks();
//     }
//   }
  


import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  UseGuards,
} from '@nestjs/common';
import { CronJobService } from './cron-job.service';
import { CreateCronJobDto } from './dto/create-cron-job.dto';
import { UpdateCronJobDto } from './dto/update-cron-job.dto';
import { Throttle, ThrottlerGuard } from '@nestjs/throttler';

@Controller('cron-jobs')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(ThrottlerGuard)
export class CronJobController {
  constructor(private readonly cronJobService: CronJobService) {}

  @Post()
  create(@Body() createCronJobDto: CreateCronJobDto) {
    return this.cronJobService.create(createCronJobDto);
  }

  @Get()
  findAll() {
    return this.cronJobService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cronJobService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCronJobDto: UpdateCronJobDto) {
    return this.cronJobService.update(id, updateCronJobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cronJobService.remove(id);
  }

  @Post('webhook/:cronJobId')
  @Throttle({ limit: 5, ttl: 60 })  // Correct usage of @Throttle decorator
  createWebhook(@Body('data') data: string, @Param('cronJobId') cronJobId: string) {
    return this.cronJobService.createWebhook(data, cronJobId);
  }

  @Get('webhooks')
  findAllWebhooks() {
    return this.cronJobService.findAllWebhooks();
  }
}
