import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (_data: never, context: ExecutionContext): string => {
    const request = context.switchToHttp().getRequest();

    return request.currentUser;
  },
);
