import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { ProfileController } from "./profile.controller";
import { Profile } from "./profile.entity";
import { ProfileService } from "./profile.service";


@Module({
    imports: [MikroOrmModule.forFeature([Profile])],
    controllers: [ProfileController],
    providers: [ProfileService],
})
export class ProfileModule { }