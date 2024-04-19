"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "JwtAuthModule", {
    enumerable: true,
    get: function() {
        return JwtAuthModule;
    }
});
const _common = require("@nestjs/common");
const _jwtauthservice = require("./jwt-auth.service");
const _jwt = require("@nestjs/jwt");
const _authservice = require("../auth.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let JwtAuthModule = class JwtAuthModule {
};
JwtAuthModule = _ts_decorate([
    (0, _common.Module)({
        imports: [],
        controllers: [],
        providers: [
            _jwtauthservice.JwtAuthService,
            _jwt.JwtService,
            _authservice.AuthService
        ]
    })
], JwtAuthModule);

//# sourceMappingURL=jwt-auth.module.js.map