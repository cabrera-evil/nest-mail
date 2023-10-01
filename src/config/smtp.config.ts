import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
    imports: [MailerModule.forRoot({
        transport: {
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: false,
            tls: {
                rejectUnauthorized: false
            },
            auth: {
                user: process.env.SMTP_HOST_USER,
                pass: process.env.SMTP_HOST_PASS,
            }
        },
        defaults: {
            from: `"No Reply" <${process.env.SMTP_HOST_USER}>`
        },
        template: {
            dir: process.cwd() + '/template/',
            adapter: new HandlebarsAdapter(),
            options: {
                strict: true,
            },
        },
    })],
})
export class TransporterConfig { }