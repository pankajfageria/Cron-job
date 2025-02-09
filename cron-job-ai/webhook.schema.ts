// webhook.schema.ts
import { Schema, Document } from 'mongoose';

export const WebhookSchema = new Schema({
  data: { type: Schema.Types.Mixed, required: true },
  cronJobId: { type: Schema.Types.ObjectId, ref: 'CronJob' },
  createdAt: { type: Date, default: Date.now },
});

export interface Webhook extends Document {
  data: any;
  cronJobId: string;
  createdAt: Date;
}
