import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getEnvPath } from './common/helpers';
import { AuthModule } from './auth/auth.module';
import { ResourceModule } from './resource/resource.module';
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
    }),
    AuthModule,
    ResourceModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
