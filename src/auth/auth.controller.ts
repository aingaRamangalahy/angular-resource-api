import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/googleauth')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    console.log('google auth req', req);
  }

  @Get('/google-redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req, @Res() res) {
    // this.authService.googleLogin(req);
    /// handles the Google OAuth2 callback
    const jwt: string = req.user.jwt;
    if (jwt) res.redirect('http://localhost:4200/login/succes/' + jwt);
    else res.redirect('http://localhost:4200/login/failure');
  }
}
