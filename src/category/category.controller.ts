import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './interfaces/category.interface';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  async findAll(): Promise<any> {
    return await this.categoryService.findAll();
  }

  @Get('/:categoryId')
  async findOne(@Param('categoryId') categoryId: string): Promise<any> {
    return await this.categoryService.findOne(categoryId);
  }

  @Post('/')
  async create(@Body() category: Category): Promise<any> {
    return await this.categoryService.create(category);
  }

  @Put('/:categoryId')
  async update(
    @Param('categoryId') categoryId: string,
    @Body() category: Category,
  ): Promise<any> {
    return await this.categoryService.update(categoryId, category);
  }

  @Delete('/:categoryId')
  async delete(@Param('categoryId') categoryId: string): Promise<any> {
    return await this.categoryService.delete(categoryId);
  }
}
