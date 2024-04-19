"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getRequestFromContext", {
    enumerable: true,
    get: function() {
        return getRequestFromContext;
    }
});
function getRequestFromContext(context) {
    let request;
    if (context.getType() === 'http') {
        request = context.switchToHttp().getRequest();
    } else if (context.getType() === 'rpc') {
        request = context.switchToRpc().getData();
    }
    return request;
}

//# sourceMappingURL=getRequestFromContext.js.map