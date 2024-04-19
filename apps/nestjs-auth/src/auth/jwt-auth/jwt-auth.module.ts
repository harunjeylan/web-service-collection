import { Module } from '@nestjs/common';
import { JwtAuthService } from './jwt-auth.service';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth.service';

@Module({
  imports: [],
  controllers: [],
  providers: [JwtAuthService, JwtService, AuthService],
})
export class JwtAuthModule {}
