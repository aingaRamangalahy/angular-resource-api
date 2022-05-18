import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateResourceDto } from './dto/create-resource.dto';
import { Resource } from './interfaces/resource.interface';
import { ResourceService } from './resource.service';

@Controller('resource')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @Get()
  async findAll(): Promise<Resource[]> {
    return await this.resourceService.findAll();
  }

  @Get('/:resourceId')
  async findOne(@Param('resourceId') resourceId: string): Promise<Resource> {
    return await this.resourceService.findOne(resourceId);
  }

  @Post('/')
  async create(@Body() resource: CreateResourceDto): Promise<Resource> {
    return await this.resourceService.create(resource);
  }

  @Put('/:resourceId')
  async update(
    @Param('resourceId') resourceId: string,
    @Body() resource: CreateResourceDto,
  ): Promise<Resource> {
    return await this.resourceService.update(resourceId, resource);
  }

  @Delete('/:resourceId')
  async delete(@Param('resourceId') resourceId: string): Promise<Resource> {
    return await this.resourceService.delete(resourceId);
  }
}
