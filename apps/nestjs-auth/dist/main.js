"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
const _filters = require("./filters");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    app.useGlobalFilters(new _filters.HttpServerExceptionFilter());
    app.enableCors({
        origin: [
            'http://127.0.0.1:3000',
            'http://localhost:3000',
            'http://127.0.0.1:4200',
            'http://localhost:4200',
            'https://tebarekekub.com'
        ]
    });
    await app.listen(8000);
}
bootstrap();

//# sourceMappingURL=main.js.map