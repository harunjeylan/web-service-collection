"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "googleAuthConstants", {
    enumerable: true,
    get: function() {
        return googleAuthConstants;
    }
});
require("dotenv/config");
const googleAuthConstants = {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    redirectURI: process.env.GOOGLE_CALLBACK_URL,
    profileURL: 'https://www.googleapis.com/oauth2/v3/userinfo',
    authorizeHost: 'https://accounts.google.com',
    authorizePath: '/o/oauth2/auth',
    tokenHost: 'https://oauth2.googleapis.com',
    tokenPath: '/token',
    scopes: [
        'profile',
        'email'
    ]
};

//# sourceMappingURL=google-auth.constant.js.map