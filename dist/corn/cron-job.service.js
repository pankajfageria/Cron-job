"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronJobService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cron_job_schema_1 = require("./schemas/cron-job.schema");
const webhook_schema_1 = require("./schemas/webhook.schema");
let CronJobService = class CronJobService {
    constructor(cronJobModel, webhookModel) {
        this.cronJobModel = cronJobModel;
        this.webhookModel = webhookModel;
    }
    async create(createCronJobDto) {
        const createdCronJob = new this.cronJobModel(createCronJobDto);
        return createdCronJob.save();
    }
    async findAll() {
        return this.cronJobModel.find().exec();
    }
    async findOne(id) {
        const cronJob = await this.cronJobModel.findById(id).exec();
        if (!cronJob) {
            throw new common_1.NotFoundException(`CronJob #${id} not found`);
        }
        return cronJob;
    }
    async update(id, updateCronJobDto) {
        const existingCronJob = await this.cronJobModel.findByIdAndUpdate(id, updateCronJobDto, { new: true }).exec();
        if (!existingCronJob) {
            throw new common_1.NotFoundException(`CronJob #${id} not found`);
        }
        return existingCronJob;
    }
    async remove(id) {
        const deletedCronJob = await this.cronJobModel.findByIdAndDelete(id).exec();
        if (!deletedCronJob) {
            throw new common_1.NotFoundException(`CronJob #${id} not found`);
        }
        return deletedCronJob;
    }
    async createWebhook(data, cronJobId) {
        const webhook = new this.webhookModel({ data, cronJob: cronJobId });
        return webhook.save();
    }
    async findAllWebhooks() {
        return this.webhookModel.find().exec();
    }
};
exports.CronJobService = CronJobService;
exports.CronJobService = CronJobService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cron_job_schema_1.CronJob.name)),
    __param(1, (0, mongoose_1.InjectModel)(webhook_schema_1.Webhook.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], CronJobService);
//# sourceMappingURL=cron-job.service.js.map