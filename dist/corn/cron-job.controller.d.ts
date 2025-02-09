import { CronJobService } from './cron-job.service';
import { CreateCronJobDto } from './dto/create-cron-job.dto';
import { UpdateCronJobDto } from './dto/update-cron-job.dto';
export declare class CronJobController {
    private readonly cronJobService;
    constructor(cronJobService: CronJobService);
    create(createCronJobDto: CreateCronJobDto): Promise<import("./schemas/cron-job.schema").CronJob>;
    findAll(): Promise<import("./schemas/cron-job.schema").CronJob[]>;
    findOne(id: string): Promise<import("./schemas/cron-job.schema").CronJob>;
    update(id: string, updateCronJobDto: UpdateCronJobDto): Promise<import("./schemas/cron-job.schema").CronJob>;
    remove(id: string): Promise<import("./schemas/cron-job.schema").CronJob>;
    createWebhook(data: string, cronJobId: string): Promise<import("./schemas/webhook.schema").Webhook>;
    findAllWebhooks(): Promise<import("./schemas/webhook.schema").Webhook[]>;
}
