import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/execute')
  async executeService(@Body('JobType') JobType: string): Promise<string> {
    return await this.appService.execute(JobType);
  }
}

// 소문자 enum을 만들것
