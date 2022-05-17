import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/user/interfaces/user.interface';

import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectModel('User') private userModel: Model<User>,
    private configService: ConfigService,
  ) {
    super({
      secretOrKey: configService.get<string>('JWT_HASH_KEY'),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload: JwtPayload): Promise<User> {
    const { _id } = payload;
    const user = await this.userModel.findOne({ _id, deleted: false });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user; // passport inject user into the request object
  }
}
