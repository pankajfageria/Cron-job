// webhook.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { WebhookService } from './webhook.service';

@Controller('webhooks')
export class WebhookController {
  constructor(private readonly webhookService: WebhookService) {}

  @Post()
  async handleWebhook(@Body() payload: any) {
    // Store the payload in MongoDB with an assigned ID and the cron job ID
    return this.webhookService.storeWebhookData(payload);
  }
}
