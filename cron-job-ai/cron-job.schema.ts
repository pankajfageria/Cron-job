// cron-job.schema.ts
import { Schema, Document } from 'mongoose';

export const CronJobSchema = new Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
  apiKey: { type: String, required: true },
  schedule: { type: String, required: true },
  startDate: { type: Date, required: true },
  lastRun: { type: Date },
  status: { type: String, enum: ['pending', 'running', 'completed'], default: 'pending' },
  history: [{
    timestamp: { type: Date, default: Date.now },
    status: { type: String },
    response: { type: String },
  }],
});

export interface CronJob extends Document {
  name: string;
  link: string;
  apiKey: string;
  schedule: string;
  startDate: Date;
  lastRun?: Date;
  status: string;
  history: { timestamp: Date; status: string; response: string }[];
}
