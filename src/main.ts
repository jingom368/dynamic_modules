import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
  console.log('HTTP 서버가 3001번 포트에서 실행 중입니다.');
}
bootstrap();
