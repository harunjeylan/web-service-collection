"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "JwtAuthService", {
    enumerable: true,
    get: function() {
        return JwtAuthService;
    }
});
const _common = require("@nestjs/common");
const _jwt = require("@nestjs/jwt");
const _jwtauthconstant = require("./jwt-auth.constant");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let JwtAuthService = class JwtAuthService {
    async encryptJwtAccessToken(accessTokenPayload) {
        this.logger.log(this.encryptJwtAccessToken.name);
        const accessToken = this.jwtService.sign(accessTokenPayload, {
            expiresIn: _jwtauthconstant.jwtConstants.accessTokenLifetime ?? '15m',
            secret: _jwtauthconstant.jwtConstants.accessSecretKey
        });
        return accessToken;
    }
    async encryptJwtRefreshToken(refreshTokenPayload) {
        this.logger.log(this.encryptJwtRefreshToken.name);
        const refreshToken = this.jwtService.sign(refreshTokenPayload, {
            expiresIn: _jwtauthconstant.jwtConstants.refreshTokenLifetime ?? '7d',
            secret: _jwtauthconstant.jwtConstants.refreshSecretKey
        });
        return refreshToken;
    }
    async decryptJwtAccessToken(accessToken) {
        this.logger.log(this.decryptJwtAccessToken.name);
        let tokenData = null;
        try {
            tokenData = this.jwtService.verify(accessToken, {
                secret: _jwtauthconstant.jwtConstants.accessSecretKey
            });
        } catch (error) {}
        return tokenData;
    }
    async decryptJwtRefreshToken(accessToken) {
        this.logger.log(this.decryptJwtRefreshToken.name);
        let tokenData = null;
        try {
            tokenData = this.jwtService.verify(accessToken, {
                secret: _jwtauthconstant.jwtConstants.refreshSecretKey
            });
        } catch (error) {}
        return tokenData;
    }
    constructor(jwtService){
        this.jwtService = jwtService;
        this.logger = new _common.Logger(JwtAuthService.name);
    }
};
JwtAuthService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _jwt.JwtService === "undefined" ? Object : _jwt.JwtService
    ])
], JwtAuthService);

//# sourceMappingURL=jwt-auth.service.js.map