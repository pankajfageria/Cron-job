// app.module.ts
import { Module } from '@nestjs/common';
import { ThrottlerModule } from 'nestjs-throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60, // time-to-live in seconds
      limit: 10, // maximum number of requests in the ttl window
    }),
    // other modules
  ],
})
export class AppModule {}
