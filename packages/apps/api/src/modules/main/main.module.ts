import { Module } from "@nestjs/common"
import { AnotherModule } from "../another/another.module"
import { MainController } from "./main.controller"
import { MainService } from "./main.service"

@Module({
	imports: [AnotherModule],
	providers: [MainService],
	controllers: [MainController],
	exports: []
})
export class MainModule {}
