"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthController", {
    enumerable: true,
    get: function() {
        return AuthController;
    }
});
const _common = require("@nestjs/common");
const _authservice = require("./auth.service");
const _googleauthservice = require("./google-auth/google-auth.service");
const _jwtauthservice = require("./jwt-auth/jwt-auth.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
let AuthController = class AuthController {
    async googleUrl() {
        const url = await this.googleAuthService.getAuthUrl();
        return {
            authUrl: url
        };
    }
    async localLogin() {}
    async googleLogin(data) {
        console.log({
            data
        });
        const googleUser = await this.googleAuthService.validateUser(data.code);
        if (!googleUser) {
            throw new _common.UnauthorizedException('Google Auth Filled');
        }
        let user = await this.authService.findOne({
            email: googleUser.email
        });
        if (!user) {
            user = await this.authService.createUser({
                firstName: googleUser.given_name,
                lastName: googleUser.family_name,
                email: googleUser.email,
                email_verified: googleUser.email_verified
            });
        }
        const jwt = {
            accessToken: await this.jwtAuthService.encryptJwtAccessToken({
                userId: user.userId
            }),
            refreshToken: await this.jwtAuthService.encryptJwtRefreshToken({
                userId: user.userId
            })
        };
        return {
            user,
            jwt
        };
    }
    constructor(googleAuthService, authService, jwtAuthService){
        this.googleAuthService = googleAuthService;
        this.authService = authService;
        this.jwtAuthService = jwtAuthService;
    }
};
_ts_decorate([
    (0, _common.Get)('/google/url'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "googleUrl", null);
_ts_decorate([
    (0, _common.Post)('/local/login'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", []),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "localLogin", null);
_ts_decorate([
    (0, _common.Post)('/google/login'),
    _ts_param(0, (0, _common.Body)()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        Object
    ]),
    _ts_metadata("design:returntype", Promise)
], AuthController.prototype, "googleLogin", null);
AuthController = _ts_decorate([
    (0, _common.Controller)('auth'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _googleauthservice.GoogleAuthService === "undefined" ? Object : _googleauthservice.GoogleAuthService,
        typeof _authservice.AuthService === "undefined" ? Object : _authservice.AuthService,
        typeof _jwtauthservice.JwtAuthService === "undefined" ? Object : _jwtauthservice.JwtAuthService
    ])
], AuthController);

//# sourceMappingURL=auth.controller.js.map