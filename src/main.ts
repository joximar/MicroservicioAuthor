import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { Logger, ValidationPipe } from '@nestjs/common';
import { envVars } from './config/envs.validator';


async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport:Transport.TCP,
      options:{
        host: envVars.HOST,
        port:envVars.PORT
      }
    }
  );

  //Habilitamos las validaciones globales
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true
  }));


  await app.listen();



  const logger = new Logger('MS-Products')
  Logger.log(`Microservicio ejecutándose en: http://${envVars.HOST}:${envVars.PORT}`);
}

bootstrap();
