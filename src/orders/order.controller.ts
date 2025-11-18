import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { OrderDto } from "./order.dto";
import { OrderService } from "./order.service";

@Controller('order')
@ApiTags('Order')
export class OrderController {
    constructor(private readonly orderService: OrderService) { }
    @Post()
    createOrder(@Body() orderDto: OrderDto) {
        console.log(orderDto);
        return this.orderService.createOrder(orderDto);
    }

    @Patch(':id')
    updateOrder(@Body() orderDto: OrderDto, @Param('id') id: number) {
        return this.orderService.updateOrder(orderDto, id);
    }

    @Get(':id')
    getOrder(@Param('id') id: number) {
        return this.orderService.getById(id);
    }
    @Get()
    getAllOrder() {
        return this.orderService.getOrder();
    }

    @Delete(':id')
    deleteOrder(@Param('id') id: number) {
        return this.orderService.deleteOrder(id);
    }
}

