import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from './common/helpers/constants.helper';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(config.APP_PORT);
}
bootstrap();
