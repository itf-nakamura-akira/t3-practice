import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
    // サーバーインスタンス生成
    const app = await NestFactory.create(AppModule);

    // 設定
    app.setGlobalPrefix('api');
    app.enableCors({
        origin: 'localhost:3000',
        allowedHeaders: ['Content-Type', 'Authorization'],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    });

    // 起動
    await app.listen(3000);
}
bootstrap();
