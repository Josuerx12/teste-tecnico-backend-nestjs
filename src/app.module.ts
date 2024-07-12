import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './infra/prisma.service';
import { AuthModule } from './auth/auth.module';
import { AuthGuardMiddleware } from './auth-guard/auth-guard.middleware';
import { LocaleModule } from './locale/locale.module';

@Module({
  imports: [AuthModule, LocaleModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthGuardMiddleware).forRoutes('/locale');
  }
}
