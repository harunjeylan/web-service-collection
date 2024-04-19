import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { getAuthTokenFromContext } from '../helpers/getAuthTokenFromContext';

export const AuthToken = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    return getAuthTokenFromContext(context);
  },
);
