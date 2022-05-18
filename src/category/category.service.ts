import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from './interfaces/category.interface';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category')
    private readonly categoryModel: Model<Category>,
  ) {}

  async create(category: Category): Promise<Category> {
    const createdCategory = new this.categoryModel(category);
    return await createdCategory.save();
  }

  async findAll(): Promise<Category[]> {
    return await this.categoryModel.find();
  }

  async findOne(categoryId: string): Promise<Category> {
    return await this.categoryModel.findById(categoryId);
  }

  async update(categoryId, category: Category): Promise<Category> {
    return await this.categoryModel.findByIdAndUpdate(categoryId, category, {
      new: true,
    });
  }

  async delete(categoryId: string): Promise<Category> {
    return await this.categoryModel.findByIdAndRemove(categoryId);
  }
}
