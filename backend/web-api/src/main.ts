import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './common/services/app-config/app-config.service';

async function bootstrap() {
    // サーバーインスタンス生成
    const app = await NestFactory.create(AppModule);

    // 設定
    const appConfigService: AppConfigService = app.get(AppConfigService);

    app.setGlobalPrefix('api');
    app.enableCors({
        origin: 'localhost:3000',
        allowedHeaders: ['Content-Type', 'Authorization'],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    });

    // 起動
    await app.listen(appConfigService.serverPort);
}
bootstrap();
