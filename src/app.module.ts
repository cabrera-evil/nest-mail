import { Module } from '@nestjs/common';
import { AppConfig } from './config/app';
import { MailModule } from './modules/mail/mail.module';

@Module({
  imports: [AppConfig, MailModule],
})
export class AppModule {}
