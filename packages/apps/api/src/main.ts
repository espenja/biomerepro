import { NestFactory } from "@nestjs/core"
import { MainModule } from "./modules/main/main.module"

async function bootstrap() {
	const port = process.env.PORT ?? 3000
	const app = await NestFactory.create(MainModule)

	console.debug(`⚡ Application Running at http://localhost:${port}`)
	console.debug(`🏠 API Running at http://localhost:${port}/api`)

	await app.listen(port)
}

bootstrap()
