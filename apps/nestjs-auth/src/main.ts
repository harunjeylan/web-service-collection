import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpServerExceptionFilter } from './filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpServerExceptionFilter());
  app.enableCors({
    origin: [
      'http://127.0.0.1:3000',
      'http://localhost:3000',
      'http://127.0.0.1:4200',
      'http://localhost:4200',
      'https://tebarekekub.com',
    ],
  });
  await app.listen(8000);
}
bootstrap();
