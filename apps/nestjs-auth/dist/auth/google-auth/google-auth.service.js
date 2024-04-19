"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "GoogleAuthService", {
    enumerable: true,
    get: function() {
        return GoogleAuthService;
    }
});
const _common = require("@nestjs/common");
const _simpleoauth2 = require("simple-oauth2");
const _googleauthconstant = require("./google-auth.constant");
const _googleauthmodule = require("./google-auth.module");
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
let GoogleAuthService = class GoogleAuthService {
    async getAuthUrl() {
        const authorizationUri = this.authClient.authorizeURL({
            redirect_uri: _googleauthconstant.googleAuthConstants.redirectURI,
            scope: _googleauthconstant.googleAuthConstants.scopes
        });
        return authorizationUri;
    }
    async validateUser(code) {
        if (!code) {
            throw new _common.BadRequestException('Code is not provided');
        }
        const response = await this.authClient.getToken({
            redirect_uri: _googleauthconstant.googleAuthConstants.redirectURI,
            scope: _googleauthconstant.googleAuthConstants.scopes,
            code: code
        });
        const { access_token } = response.token;
        const res = await fetch(_googleauthconstant.googleAuthConstants.profileURL, {
            headers: {
                Authorization: `Bearer ${access_token}`,
                'Content-Type': 'application/json'
            }
        });
        if (!res.ok) {
            console.log(res.statusText);
            return null;
        }
        const user = await res.json();
        return user;
    }
    constructor(authClient){
        this.authClient = authClient;
    }
};
GoogleAuthService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_param(0, (0, _common.Inject)(_googleauthmodule.GOOGLE_OAUTH20)),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _simpleoauth2.AuthorizationCode === "undefined" ? Object : _simpleoauth2.AuthorizationCode
    ])
], GoogleAuthService);

//# sourceMappingURL=google-auth.service.js.map