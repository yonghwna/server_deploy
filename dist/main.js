"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const http_exception_filter_1 = require("./common/exceptions/http-exception.filter");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const expressBasicAuth = require("express-basic-auth");
const path = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.use(['/docs', 'docs-json'], expressBasicAuth({
        challenge: true,
        users: {
            [process.env.SWAGGER_USER]: process.env.SWAGGER_PASSWORD,
        },
    }));
    app.useStaticAssets(path.join(__dirname, './common', 'uploads'), {
        prefix: '/media',
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('project_api')
        .setDescription('3rd_project_api')
        .setVersion('1.0.0')
        .addTag('cats')
        .build();
    const documentFactory = () => swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('docs', app, documentFactory);
    app.enableCors({ origin: true, credentials: true });
    const PORT = process.env.PORT;
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map