import { Injectable } from '@nestjs/common';
import { CreateMailDto } from './dto/create-mail.dto';
import { UpdateMailDto } from './dto/update-mail.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) { }

  async create(createMailDto: CreateMailDto) {
    await this.mailerService.sendMail({
      to: createMailDto.to,
      from: process.env.SMTP_HOST_USER,
      subject: createMailDto.subject,
      template: 'index',
      context: {
        username: createMailDto.username,
        resetLink: createMailDto.resetLink,
      },
    });

    return {
      statusCode: '200',
      message: 'Email sent successfully',
      data: createMailDto,
    }
  }
}
