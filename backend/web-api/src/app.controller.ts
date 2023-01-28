import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AppConfigService } from './common/app-config/app-config.service';

@Controller()
export class AppController {
    constructor(private readonly appConfigService: AppConfigService, private readonly appService: AppService) {}

    @Get()
    getHello(): { port: number } {
        console.log(process.env.NODE_ENV + ': ' + this.appConfigService.serverPort);

        return {
            port: this.appConfigService.serverPort,
        };
        // return this.appService.getHello();
    }
}
