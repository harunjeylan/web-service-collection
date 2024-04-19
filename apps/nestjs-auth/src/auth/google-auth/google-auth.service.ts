import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { AuthorizationCode } from 'simple-oauth2';
import { AbstractOAuthService } from '../interfaces/auth.type';
import { googleAuthConstants } from './google-auth.constant';
import { GOOGLE_OAUTH20 } from './google-auth.module';
import { GoogleUser } from './google-auth.type';

@Injectable()
export class GoogleAuthService implements AbstractOAuthService {
  constructor(
    @Inject(GOOGLE_OAUTH20)
    readonly authClient: AuthorizationCode,
  ) {}

  async getAuthUrl() {
    const authorizationUri = this.authClient.authorizeURL({
      redirect_uri: googleAuthConstants.redirectURI,
      scope: googleAuthConstants.scopes,
    });
    return authorizationUri;
  }

  async validateUser(code: string): Promise<GoogleUser | null> {
    if (!code) {
      throw new BadRequestException('Code is not provided');
    }

    const response = await this.authClient.getToken({
      redirect_uri: googleAuthConstants.redirectURI,
      scope: googleAuthConstants.scopes,
      code: code,
    });

    const { access_token } = response.token as { access_token: string };

    const res = await fetch(googleAuthConstants.profileURL, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      console.log(res.statusText);
      return null;
    }

    const user = await res.json();

    return user as GoogleUser;
  }
}
