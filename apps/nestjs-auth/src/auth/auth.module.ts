import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleAuthService } from './google-auth/google-auth.service';
import { GoogleAuthModule } from './google-auth/google-auth.module';

@Module({
  imports: [GoogleAuthModule],
  controllers: [AuthController],
  providers: [AuthService, GoogleAuthService],
})
export class AuthModule {}
