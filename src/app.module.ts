import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfig } from './config/app';
import { MailModule } from './modules/mail/mail.module';

@Module({
  imports: [AppConfig, MailModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
