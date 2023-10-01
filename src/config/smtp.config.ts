import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

@Module({
    imports: [MailerModule.forRoot({
        transport: {
            host: process.env.SMTP_HOST,
            port: 587,
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
            from: '"cabrera-evil" <douglascabrera.dev@outlook.com>', // outgoing email ID
        },
        template: {
            dir: process.cwd() + '/template/',
            adapter: new HandlebarsAdapter(), // or new PugAdapter()
            options: {
                strict: true,
            },
        },
    })],
})
export class TransporterConfig { }