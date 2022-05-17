import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interfaces/user.interface';
import { UserService } from './user.service';

@Controller('users')
// @UseGuards(AuthGuard(), RolesGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get('test')
  test(): any {
    return { ok: 'updated' };
  }

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get('/:id')
  // @Roles('admin')
  getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.getUserById(id);
  }

  @Post()
  // @Roles('admin')
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
  }

  @Put('/:id')
  // @Roles('admin')
  updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: CreateUserDto,
  ): Promise<User> {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete('/:id')
  // @Roles('admin')
  deleteUser(@Param('id') id: string): Promise<{ message: string }> {
    return this.userService.deleteUser(id);
  }
}
