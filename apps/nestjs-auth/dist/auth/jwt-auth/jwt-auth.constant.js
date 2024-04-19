"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "jwtConstants", {
    enumerable: true,
    get: function() {
        return jwtConstants;
    }
});
const jwtConstants = {
    accessSecretKey: process.env.JWT_ACCESS_SECRETE_KEY,
    refreshSecretKey: process.env.JWT_REFRESH_SECRETE_KEY,
    accessTokenLifetime: process.env.JWT_ACCESS_LIFETIME,
    refreshTokenLifetime: process.env.JWT_REFRESH_LIFETIME
};

//# sourceMappingURL=jwt-auth.constant.js.map