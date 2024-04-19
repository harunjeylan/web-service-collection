"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HttpServerExceptionFilter", {
    enumerable: true,
    get: function() {
        return HttpServerExceptionFilter;
    }
});
const _common = require("@nestjs/common");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let HttpServerExceptionFilter = class HttpServerExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        this.logger.error(exception);
        const message = exception?.message ?? exception?.response?.message ?? 'Internal Server Error';
        const statusCode = exception?.statusCode ?? exception?.response?.statusCode ?? _common.HttpStatus.INTERNAL_SERVER_ERROR;
        console.log(exception);
        response.status(statusCode).json({
            error: true,
            statusCode: statusCode,
            message: message,
            timestamp: new Date().toISOString(),
            path: request.url
        });
    }
    constructor(){
        this.logger = new _common.Logger(HttpServerExceptionFilter.name);
    }
};
HttpServerExceptionFilter = _ts_decorate([
    (0, _common.Catch)()
], HttpServerExceptionFilter);

//# sourceMappingURL=http-server-exception.filter.js.map