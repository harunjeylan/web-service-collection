import { ExecutionContext } from '@nestjs/common';
import { getRequestFromContext } from './getRequestFromContext';

export function getAuthTokenFromContext(
  context: ExecutionContext,
): string | undefined {
  const request = getRequestFromContext<any>(context)
  const authHeader = request.headers['authorization'];
  return authHeader;
}
