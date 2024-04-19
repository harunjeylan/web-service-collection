import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpServerExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpServerExceptionFilter.name);
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    this.logger.error(exception);
    const message =
      exception?.message ??
      exception?.response?.message ??
      'Internal Server Error';

    const statusCode =
      exception?.statusCode ??
      exception?.response?.statusCode ??
      HttpStatus.INTERNAL_SERVER_ERROR;
    console.log(exception);

    response.status(statusCode).json({
      error: true,
      statusCode: statusCode,
      message: message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
