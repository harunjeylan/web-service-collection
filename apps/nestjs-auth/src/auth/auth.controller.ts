import {
  Body,
  Controller,
  Get,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleAuthService } from './google-auth/google-auth.service';
import { JwtAuthService } from './jwt-auth/jwt-auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly googleAuthService: GoogleAuthService,
    private readonly authService: AuthService,
    private readonly jwtAuthService: JwtAuthService,
  ) {}

  @Get('/google/url')
  async googleUrl() {
    const url = await this.googleAuthService.getAuthUrl();
    return { authUrl: url };
  }

  @Post('/local/login')
  async localLogin(){
    
  }
  @Post('/google/login')
  async googleLogin(@Body() data: { code: string }) {
    console.log({ data });

    const googleUser = await this.googleAuthService.validateUser(data.code);
    if (!googleUser) {
      throw new UnauthorizedException('Google Auth Filled');
    }

    let user = await this.authService.findOne({ email: googleUser.email });
    if (!user) {
      user = await this.authService.createUser({
        firstName: googleUser.given_name,
        lastName: googleUser.family_name,
        email: googleUser.email,
        email_verified: googleUser.email_verified,
      });
    }

    const jwt = {
      accessToken: await this.jwtAuthService.encryptJwtAccessToken({
        userId: user.userId,
      }),
      refreshToken: await this.jwtAuthService.encryptJwtRefreshToken({
        userId: user.userId,
      }),
    };

    return { user, jwt };
  }
}
