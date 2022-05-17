import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { ResourceController } from './resource.controller';
import { ResourceService } from './resource.service';
import { ResourceSchema } from './schema/resource.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Resource', schema: ResourceSchema }]),
    AuthModule,
  ],
  controllers: [ResourceController],
  providers: [ResourceService],
})
export class ResourceModule {}
