import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AppConfigService } from './common/services/app-config/app-config.service';
import * as Joi from 'joi';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            envFilePath: [`environments/dev.env`],
            validationSchema: Joi.object({
                WEB_API_PORT: Joi.number().required(),
                MARIADB_HOST: Joi.string().required(),
                MARIADB_DATABASE: Joi.string().required(),
                MARIADB_PORT: Joi.number().required(),
                MARIADB_USER: Joi.string().required(),
                MARIADB_PASSWORD: Joi.string().required(),
            }),
            validationOptions: {
                allowUnknown: true,
                abortEarly: false,
            },
        }),
    ],
    controllers: [AppController],
    providers: [AppConfigService, AppService],
})
export class AppModule {}
