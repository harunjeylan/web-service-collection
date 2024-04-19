import { ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
export function getRequestFromContext<T extends object>(
  context: ExecutionContext,
): Request & T {
  let request: Request & T;
  if (context.getType() === 'http') {
    request = context.switchToHttp().getRequest<Request & T>();
  } else if (context.getType() === 'rpc') {
    request = context.switchToRpc().getData<Request & T>();
  }
  return request;
}
