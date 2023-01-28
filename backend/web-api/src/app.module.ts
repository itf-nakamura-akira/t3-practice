import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AppConfigService } from './common/app-config/app-config.service';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            cache: true,
            envFilePath: [`environments/dev.env`],
        }),
    ],
    controllers: [AppController],
    providers: [AppConfigService, AppService],
})
export class AppModule {}
