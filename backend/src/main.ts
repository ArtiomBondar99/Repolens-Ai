import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule, ObserveInstrument } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });
  app.enableCors({
    origin: 'http://localhost:5173',
  });
  app.enableShutdownHooks();

  const port = process.env.PORT || 3000;

  await app.listen(port);

  Logger.log(
    `Server running on http://localhost:${port}`,
    'Bootstrap',
  );
}

bootstrap();