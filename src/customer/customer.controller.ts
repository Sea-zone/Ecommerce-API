import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CustomerDto } from "./customer.dto";
import { CustomerService } from "./customer.service";

@ApiTags('Customer')
@Controller('customer')
export class CustomerController{
    constructor(private readonly customerService: CustomerService){}

        @Post()
        createCustomer(@Body() customerDto: CustomerDto){
            console.log("I am being called");
            return this.customerService.createCustomer(customerDto);
        }

        @Patch(':id')
        updateCustomer(@Body() customerDto: CustomerDto, @Param('id') id:number){
            return this.customerService.updateCustomer(customerDto,id);
        }

        @Get(':id')
        getCustomer(@Param('id') id: number){
            return this.customerService.getById(id);
        }
        @Get()
        getAll(){
            return this.customerService.getCustomer();
        }
        @Delete(':id')
        deleteCustomer(@Param('id') id:number){
            return this.customerService.deleteCustomer(id);
        }


}