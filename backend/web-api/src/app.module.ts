import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppConfigService } from './common/services/app-config/app-config.service';
import * as Joi from 'joi';
import { RoutersModule } from './routers/routers.module';
import { APP_PIPE } from '@nestjs/core';
import { ValidationPipe } from './common/pipes/validation/validation.pipe';

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
        RoutersModule,
    ],
    controllers: [],
    providers: [
        AppConfigService,
        {
            provide: APP_PIPE,
            useClass: ValidationPipe,
        },
    ],
})
export class AppModule {}
