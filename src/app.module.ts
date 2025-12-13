import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [AuthorsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
