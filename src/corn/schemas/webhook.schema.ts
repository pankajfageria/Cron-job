import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Webhook extends Document {
  @Prop({ required: true })
  data: string;

  @Prop({ required: true })
  cronJobId: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const WebhookSchema = SchemaFactory.createForClass(Webhook);
