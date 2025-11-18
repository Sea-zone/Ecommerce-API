import { MikroOrmModule } from "@mikro-orm/nestjs";
import { Module } from "@nestjs/common";
import { CustomerController } from "./customer.controller";
import { CustomerEntity } from "./customer.entity";
import { CustomerService } from "./customer.service";

@Module({
    imports: [MikroOrmModule.forFeature([CustomerEntity])],
    controllers: [CustomerController],
    providers: [CustomerService]
})
export class customerModule{}