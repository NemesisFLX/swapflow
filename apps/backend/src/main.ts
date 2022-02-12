import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HelloWorld } from "@swapflow/utils/helloWorld"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(HelloWorld)
  await app.listen(3000);
}
bootstrap();
