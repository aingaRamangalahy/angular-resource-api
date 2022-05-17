import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Resource } from './interfaces/resource.interface';

@Injectable()
export class ResourceService {
  constructor(
    @InjectModel('Resource')
    private readonly resourceModel: Model<Resource>,
  ) {}

  async create(resource: Resource): Promise<Resource> {
    const createdResource = new this.resourceModel(resource);
    return await createdResource.save();
  }

  async findAll(): Promise<Resource[]> {
    return await this.resourceModel.find().populate('uploader category');
  }

  async findOne(resourceId: string): Promise<Resource> {
    return await this.resourceModel
      .findById(resourceId)
      .populate('uploader category');
  }

  async update(resourceId, resource: Resource): Promise<Resource> {
    return await this.resourceModel.findByIdAndUpdate(resourceId, resource, {
      new: true,
    });
  }

  async delete(resourceId: string): Promise<Resource> {
    return await this.resourceModel.findByIdAndRemove(resourceId);
  }
}
