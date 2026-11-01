"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        instrument: app_module_1.ObserveInstrument,
    });
    const port = process.env.PORT || 3000;
    await app.listen(port);
    common_1.Logger.log(`Server running on http://localhost:${port}`, 'Bootstrap');
}
bootstrap();
//# sourceMappingURL=main.js.map