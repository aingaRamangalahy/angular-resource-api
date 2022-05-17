import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateQuery } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private userModel: Model<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userModel.find({ deleted: false });
  }

  async getUserById(userId: string): Promise<User> {
    const user = await this.userModel.findOne({ _id: userId, deleted: false });
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  async createUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async updateUser(userId: string, user: User): Promise<User> {
    const verifyUser = await this.getUserById(userId);
    return await this.userModel.findByIdAndUpdate(verifyUser._id, user, {
      new: true,
    });
  }

  async deleteUser(userId: string): Promise<{ message: string }> {
    const user = await this.getUserById(userId);
    const query: UpdateQuery<any> = {
      deleted: true,
      updatedAt: Date.now(),
    };
    await this.userModel.findByIdAndUpdate(user._id, query);

    return { message: `user with id :"${userId}" deleted successfully` };
  }
}
