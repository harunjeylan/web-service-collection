import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AuthorizationCode } from 'simple-oauth2';
import { googleAuthConstants } from './google-auth.constant';

export const GOOGLE_OAUTH20 = 'GOOGLE_OAUTH20';

@Module({
  providers: [
    {
      provide: GOOGLE_OAUTH20,
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const oauth2Client = new AuthorizationCode({
          client: {
            id: googleAuthConstants.clientID,
            secret: googleAuthConstants.clientSecret,
          },
          auth: {
            authorizeHost: googleAuthConstants.authorizeHost,
            authorizePath: googleAuthConstants.authorizePath,
            tokenHost: googleAuthConstants.tokenHost,
            tokenPath: googleAuthConstants.tokenPath,
          },
        });
        return oauth2Client;
      },
    },
  ],
  exports: [GOOGLE_OAUTH20],
})
export class GoogleAuthModule {}
