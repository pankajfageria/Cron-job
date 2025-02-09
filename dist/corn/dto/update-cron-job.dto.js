"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCronJobDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_cron_job_dto_1 = require("./create-cron-job.dto");
class UpdateCronJobDto extends (0, mapped_types_1.PartialType)(create_cron_job_dto_1.CreateCronJobDto) {
}
exports.UpdateCronJobDto = UpdateCronJobDto;
//# sourceMappingURL=update-cron-job.dto.js.map