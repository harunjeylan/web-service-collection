"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getCurrentUserFromContext", {
    enumerable: true,
    get: function() {
        return getCurrentUserFromContext;
    }
});
const _getRequestFromContext = require("./getRequestFromContext");
function getCurrentUserFromContext(context) {
    try {
        const request = (0, _getRequestFromContext.getRequestFromContext)(context);
        return request.user;
    } catch (error) {
        console.log(error);
    }
}

//# sourceMappingURL=getCurrentUserFromContext.js.map