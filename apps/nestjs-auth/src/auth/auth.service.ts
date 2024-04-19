import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {}
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];
  async findOne(where: { id?: number; email?: string }) {
    return this.users[0];
  }

  async createUser(data: {
    firstName: string;
    lastName: string;
    email: string;
    email_verified: boolean;
    picture?: string;
  }) {
    return this.users[0];
  }
}
