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
exports.CronJobController = void 0;
const common_1 = require("@nestjs/common");
const cron_job_service_1 = require("./cron-job.service");
const create_cron_job_dto_1 = require("./dto/create-cron-job.dto");
const update_cron_job_dto_1 = require("./dto/update-cron-job.dto");
const throttler_1 = require("@nestjs/throttler");
let CronJobController = class CronJobController {
    constructor(cronJobService) {
        this.cronJobService = cronJobService;
    }
    create(createCronJobDto) {
        return this.cronJobService.create(createCronJobDto);
    }
    findAll() {
        return this.cronJobService.findAll();
    }
    findOne(id) {
        return this.cronJobService.findOne(id);
    }
    update(id, updateCronJobDto) {
        return this.cronJobService.update(id, updateCronJobDto);
    }
    remove(id) {
        return this.cronJobService.remove(id);
    }
    createWebhook(data, cronJobId) {
        return this.cronJobService.createWebhook(data, cronJobId);
    }
    findAllWebhooks() {
        return this.cronJobService.findAllWebhooks();
    }
};
exports.CronJobController = CronJobController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cron_job_dto_1.CreateCronJobDto]),
    __metadata("design:returntype", void 0)
], CronJobController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CronJobController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CronJobController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_cron_job_dto_1.UpdateCronJobDto]),
    __metadata("design:returntype", void 0)
], CronJobController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CronJobController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('webhook/:cronJobId'),
    (0, throttler_1.Throttle)({ limit: 5, ttl: 60 }),
    __param(0, (0, common_1.Body)('data')),
    __param(1, (0, common_1.Param)('cronJobId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], CronJobController.prototype, "createWebhook", null);
__decorate([
    (0, common_1.Get)('webhooks'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CronJobController.prototype, "findAllWebhooks", null);
exports.CronJobController = CronJobController = __decorate([
    (0, common_1.Controller)('cron-jobs'),
    (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor),
    (0, common_1.UseGuards)(throttler_1.ThrottlerGuard),
    __metadata("design:paramtypes", [cron_job_service_1.CronJobService])
], CronJobController);
//# sourceMappingURL=cron-job.controller.js.map