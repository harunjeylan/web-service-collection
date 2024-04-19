import { ExecutionContext } from '@nestjs/common';
import { getRequestFromContext } from './getRequestFromContext';

export function getCurrentUserFromContext<User = undefined>(
  context: ExecutionContext,
): User {
  try {
    const request = getRequestFromContext<any>(context);
    return request.user;
  } catch (error) {
    console.log(error);
  }
}
