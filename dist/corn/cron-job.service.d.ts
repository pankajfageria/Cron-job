/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose/types/inferrawdoctype" />
import { Model } from 'mongoose';
import { CronJob } from './schemas/cron-job.schema';
import { Webhook } from './schemas/webhook.schema';
import { CreateCronJobDto } from './dto/create-cron-job.dto';
import { UpdateCronJobDto } from './dto/update-cron-job.dto';
export declare class CronJobService {
    private cronJobModel;
    private webhookModel;
    constructor(cronJobModel: Model<CronJob>, webhookModel: Model<Webhook>);
    create(createCronJobDto: CreateCronJobDto): Promise<CronJob>;
    findAll(): Promise<CronJob[]>;
    findOne(id: string): Promise<CronJob>;
    update(id: string, updateCronJobDto: UpdateCronJobDto): Promise<CronJob>;
    remove(id: string): Promise<CronJob>;
    createWebhook(data: string, cronJobId: string): Promise<Webhook>;
    findAllWebhooks(): Promise<Webhook[]>;
}
