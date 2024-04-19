import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { getCurrentUserFromContext } from '../helpers/getCurrentUserFromContext';

export const CurrentUser = createParamDecorator(
  (_data: unknown, context: ExecutionContext) => {
    return getCurrentUserFromContext(context);
  },
);
