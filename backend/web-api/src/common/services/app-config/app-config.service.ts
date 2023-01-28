import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * 環境変数を読み込むService
 */
@Injectable()
export class AppConfigService {
    /**
     * Web APIの起動ポート
     */
    get serverPort(): number {
        return +this.configService.get<number>('WEB_API_PORT');
    }

    /**
     * データベースのホスト
     */
    get databaseHost(): string {
        return this.configService.get<string>('MARIADB_HOST');
    }

    /**
     * データベースの名前
     */
    get databaseName(): string {
        return this.configService.get<string>('MARIADB_DATABASE');
    }

    /**
     * データベースのポート
     */
    get databasePort(): number {
        return +this.configService.get<number>('MARIADB_PORT');
    }

    /**
     * データベースのユーザー
     */
    get databaseUser(): string {
        return this.configService.get<string>('MARIADB_USER');
    }

    /**
     * データベースのパスワード
     */
    get databasePassword(): string {
        return this.configService.get<string>('MARIADB_PASSWORD');
    }

    /**
     * コンストラクター
     *
     * @param configService ConfigService
     */
    constructor(private readonly configService: ConfigService) {}
}
