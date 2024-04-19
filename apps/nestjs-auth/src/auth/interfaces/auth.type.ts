export abstract class AbstractOAuthService {
  async validateUser(authCode: string): Promise<any> {
    return null;
  }
  async getAuthUrl(): Promise<string> {
    return null;
  }
}
