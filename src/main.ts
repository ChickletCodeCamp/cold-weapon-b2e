import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'; //swagger
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // [B] swagger
  const config = new DocumentBuilder()
    .setTitle('cold weapon API')
    .setDescription('The cold weapon API description')
    .setVersion('1.0')
    .addTag('cold weapon')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // [E] swagger
  await app.listen(3050);
}
bootstrap();