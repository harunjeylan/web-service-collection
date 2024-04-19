import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './jwt-auth.constant';

@Injectable()
export class JwtAuthService {
  private readonly logger = new Logger(JwtAuthService.name);
  constructor(private readonly jwtService: JwtService) {}

  async encryptJwtAccessToken(accessTokenPayload: any) {
    this.logger.log(this.encryptJwtAccessToken.name);

    const accessToken: string = this.jwtService.sign(accessTokenPayload, {
      expiresIn: jwtConstants.accessTokenLifetime ?? '15m',
      secret: jwtConstants.accessSecretKey,
    });

    return accessToken;
  }

  async encryptJwtRefreshToken(refreshTokenPayload: any) {
    this.logger.log(this.encryptJwtRefreshToken.name);

    const refreshToken = this.jwtService.sign(refreshTokenPayload, {
      expiresIn: jwtConstants.refreshTokenLifetime ?? '7d',
      secret: jwtConstants.refreshSecretKey,
    });

    return refreshToken;
  }

  async decryptJwtAccessToken<ATP extends object>(accessToken: string) {
    this.logger.log(this.decryptJwtAccessToken.name);
    let tokenData: ATP | null = null;
    try {
      tokenData = this.jwtService.verify<ATP>(accessToken, {
        secret: jwtConstants.accessSecretKey,
      });
    } catch (error: any) {}
    return tokenData;
  }

  async decryptJwtRefreshToken<RTP extends object>(accessToken: string) {
    this.logger.log(this.decryptJwtRefreshToken.name);
    let tokenData: RTP | null = null;
    try {
      tokenData = this.jwtService.verify<RTP>(accessToken, {
        secret: jwtConstants.refreshSecretKey,
      });
    } catch (error: any) {}
    return tokenData;
  }
}
