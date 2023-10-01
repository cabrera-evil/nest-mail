import { Module } from '@nestjs/common';
import { EnvironmentConfig } from './enviroment.config';
import { TransporterConfig } from './smtp.config'

@Module({
    imports: [EnvironmentConfig, TransporterConfig],
})
export class AppConfig { }