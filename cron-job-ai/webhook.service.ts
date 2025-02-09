// webhook.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Webhook } from './schemas/webhook.schema';
import { Model } from 'mongoose';

@Injectable()
export class WebhookService {
  constructor(@InjectModel(Webhook.name) private webhookModel: Model<Webhook>) {}

  async storeWebhookData(data: any): Promise<Webhook> {
    const webhook = new this.webhookModel({
      data,
    });
    return webhook.save();
  }
}
