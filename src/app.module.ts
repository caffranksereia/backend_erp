import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SchedulingModule } from './scheduling/scheduling.module';

@Module({
  imports: [UsersModule, SchedulingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
