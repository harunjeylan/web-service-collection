"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getAuthTokenFromContext", {
    enumerable: true,
    get: function() {
        return getAuthTokenFromContext;
    }
});
const _getRequestFromContext = require("./getRequestFromContext");
function getAuthTokenFromContext(context) {
    const request = (0, _getRequestFromContext.getRequestFromContext)(context);
    const authHeader = request.headers['authorization'];
    return authHeader;
}

//# sourceMappingURL=getAuthTokenFromContext.js.map