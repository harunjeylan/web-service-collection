"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CurrentUser", {
    enumerable: true,
    get: function() {
        return CurrentUser;
    }
});
const _common = require("@nestjs/common");
const _getCurrentUserFromContext = require("../helpers/getCurrentUserFromContext");
const CurrentUser = (0, _common.createParamDecorator)((_data, context)=>{
    return (0, _getCurrentUserFromContext.getCurrentUserFromContext)(context);
});

//# sourceMappingURL=current-user-decorator.js.map