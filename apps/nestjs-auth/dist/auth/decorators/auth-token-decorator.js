"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthToken", {
    enumerable: true,
    get: function() {
        return AuthToken;
    }
});
const _common = require("@nestjs/common");
const _getAuthTokenFromContext = require("../helpers/getAuthTokenFromContext");
const AuthToken = (0, _common.createParamDecorator)((_data, context)=>{
    return (0, _getAuthTokenFromContext.getAuthTokenFromContext)(context);
});

//# sourceMappingURL=auth-token-decorator.js.map