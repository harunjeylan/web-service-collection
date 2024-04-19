"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    GOOGLE_OAUTH20: function() {
        return GOOGLE_OAUTH20;
    },
    GoogleAuthModule: function() {
        return GoogleAuthModule;
    }
});
const _common = require("@nestjs/common");
const _config = require("@nestjs/config");
const _simpleoauth2 = require("simple-oauth2");
const _googleauthconstant = require("./google-auth.constant");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
const GOOGLE_OAUTH20 = 'GOOGLE_OAUTH20';
let GoogleAuthModule = class GoogleAuthModule {
};
GoogleAuthModule = _ts_decorate([
    (0, _common.Module)({
        providers: [
            {
                provide: GOOGLE_OAUTH20,
                inject: [
                    _config.ConfigService
                ],
                useFactory: async (config)=>{
                    const oauth2Client = new _simpleoauth2.AuthorizationCode({
                        client: {
                            id: _googleauthconstant.googleAuthConstants.clientID,
                            secret: _googleauthconstant.googleAuthConstants.clientSecret
                        },
                        auth: {
                            authorizeHost: _googleauthconstant.googleAuthConstants.authorizeHost,
                            authorizePath: _googleauthconstant.googleAuthConstants.authorizePath,
                            tokenHost: _googleauthconstant.googleAuthConstants.tokenHost,
                            tokenPath: _googleauthconstant.googleAuthConstants.tokenPath
                        }
                    });
                    return oauth2Client;
                }
            }
        ],
        exports: [
            GOOGLE_OAUTH20
        ]
    })
], GoogleAuthModule);

//# sourceMappingURL=google-auth.module.js.map