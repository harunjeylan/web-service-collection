"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "JwtAuthGuard", {
    enumerable: true,
    get: function() {
        return JwtAuthGuard;
    }
});
const _common = require("@nestjs/common");
const _jwtauthservice = require("./jwt-auth.service");
const _getAuthTokenFromContext = require("../helpers/getAuthTokenFromContext");
const _getRequestFromContext = require("../helpers/getRequestFromContext");
const _authservice = require("../auth.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let JwtAuthGuard = class JwtAuthGuard {
    async canActivate(context) {
        this.logger.log(this.canActivate.name);
        const authHeader = (0, _getAuthTokenFromContext.getAuthTokenFromContext)(context);
        const request = (0, _getRequestFromContext.getRequestFromContext)(context);
        const token = authHeader && authHeader.split(' ')[1];
        if (!token) {
            throw new _common.UnauthorizedException('Unauthorized');
        }
        const data = await this.jwtAuthService.decryptJwtAccessToken(token);
        if (!data) {
            throw new _common.UnauthorizedException('Access Token Invalid or Expired!');
        }
        const user = await this.authService.findOne(data.userId);
        if (!user) {
            throw new _common.UnauthorizedException('User Not Found With Access Token!');
        }
        request.user = user;
        return true;
    }
    constructor(jwtAuthService, authService){
        this.jwtAuthService = jwtAuthService;
        this.authService = authService;
        this.logger = new _common.Logger(JwtAuthGuard.name);
    }
};
JwtAuthGuard = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _jwtauthservice.JwtAuthService === "undefined" ? Object : _jwtauthservice.JwtAuthService,
        typeof _authservice.AuthService === "undefined" ? Object : _authservice.AuthService
    ])
], JwtAuthGuard);

//# sourceMappingURL=jwt-auth.guard.js.map