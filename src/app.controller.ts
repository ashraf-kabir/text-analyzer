import { Controller, Get } from '@nestjs/common';
import { CustomLogger } from './logger/logger.service';

@Controller()
export class AppController {
  constructor(private readonly logger: CustomLogger) {}

  @Get()
  getHello(): string {
    this.logger.log('Hello World endpoint called');
    return 'Hello World!';
  }
}
