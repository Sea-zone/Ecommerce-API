import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { OrderDto } from "./order.dto";
import { Order } from "./order.entity";
import { OrderRepository } from "./order.repository";

@Injectable()
export class OrderService {

    constructor(private readonly orderRepo: OrderRepository) { }


    async createOrder(orderDto: OrderDto) {
        const order = this.orderRepo.create(
            {
                ...Order,
                userId: orderDto.userId,
                productId: orderDto.productId,
                quantity: orderDto.quantity,
                price: orderDto.price,
                updatedAt: orderDto.updatedAt,
                createdAt: orderDto.createdAt,
                orderDate: orderDto.orderDate,

            }
        );
        await this.orderRepo.getEntityManager().persistAndFlush(order);
        return {
            data: order, message: 'profile has been created successfully'
        }
    }

    async updateOrder(orderDto: OrderDto, id: number) {
        const oldOrder = await this.orderRepo.findOne(id);
        if (oldOrder == null) {
            throw new NotFoundException(HttpStatus.NOT_FOUND, 'Order not found');

        }
        const order = this.orderRepo.assign(oldOrder, {

            userId: orderDto.userId,
            productId: orderDto.productId,
            quantity: orderDto.quantity,
            price: orderDto.price,
            updatedAt: orderDto.updatedAt,
            createdAt: orderDto.createdAt,
            orderDate: orderDto.orderDate,

        });
        await this.orderRepo.getEntityManager().persistAndFlush(order);
        return {
            message: 'order has been updated successfully',
            order: order,
        };

    }

    getOrder() {
        return this.orderRepo.findAll();
    }

    async getById(id: number) {
        const oldOrder = await this.orderRepo.findOne(id);
        if (oldOrder == null) {
            throw new NotFoundException(HttpStatus.NOT_FOUND, 'order not found');
        }
        return {
            message: 'order by id fetched',
            user: oldOrder
        };
    }

    async deleteOrder(id: number) {
        await this.orderRepo.nativeDelete({ id });
        return {
            message: 'deleted succesfully',
        };
    }

}
