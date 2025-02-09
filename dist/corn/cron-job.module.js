"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronJobModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const schedule_1 = require("@nestjs/schedule");
const throttler_1 = require("@nestjs/throttler");
const cron_job_service_1 = require("./cron-job.service");
const cron_job_controller_1 = require("./cron-job.controller");
const cron_job_schema_1 = require("./schemas/cron-job.schema");
const webhook_schema_1 = require("./schemas/webhook.schema");
let CronJobModule = class CronJobModule {
};
exports.CronJobModule = CronJobModule;
exports.CronJobModule = CronJobModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: cron_job_schema_1.CronJob.name, schema: cron_job_schema_1.CronJobSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: webhook_schema_1.Webhook.name, schema: webhook_schema_1.WebhookSchema }]),
            schedule_1.ScheduleModule.forRoot(),
            throttler_1.ThrottlerModule.forRoot({
                ttl: 60,
                limit: 10,
            }),
        ],
        controllers: [cron_job_controller_1.CronJobController],
        providers: [cron_job_service_1.CronJobService],
    })
], CronJobModule);
//# sourceMappingURL=cron-job.module.js.map