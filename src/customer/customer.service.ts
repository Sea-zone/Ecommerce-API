import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { CustomerDto } from "./customer.dto";
import { CustomerRepository } from "./customer.repository";


@Injectable()
export class CustomerService {
    constructor(private readonly customerRepo: CustomerRepository) { }
    async createCustomer(customerDto: CustomerDto) {
        console.log(customerDto);
        const customer = this.customerRepo.create({
            address: customerDto?.address,
            age: customerDto?.age,
            name: customerDto?.name,
            password: customerDto?.password,
            phoneNumber: customerDto?.phoneNumber

        });

        //business logic
        await this.customerRepo.getEntityManager().persistAndFlush(customer);
    }
    async updateCustomer(customerDto: CustomerDto, id: number) {
        const oldCustomer = await this.customerRepo.findOne(id);
        if (oldCustomer == null) {
            throw new NotFoundException(HttpStatus.NOT_FOUND, 'User not found');

        }
        const customer = this.customerRepo.assign(oldCustomer, {
            address: customerDto?.address,
            age: customerDto?.age,
            name: customerDto?.name,
            password: customerDto?.password,
            phoneNumber: customerDto?.phoneNumber,
        });
        await this.customerRepo.getEntityManager().persistAndFlush(customer);

        return {
            message: 'customer updated successfully',
            customer: customer,
        };

    }
    getCustomer() {
        return this.customerRepo.findAll();
    }
    async getById(id: number) {
        const oldCustomer = await this.customerRepo.findOne(id);
        if (oldCustomer == null) {
            throw new NotFoundException(HttpStatus.NOT_FOUND, 'User not found');
        }
        return {
            message: 'customer by id fetched',
            customer: oldCustomer

        }
    }

    async deleteCustomer(id: number) {
        await this.customerRepo.nativeDelete({ id });
        return {
            message: 'deleted successfully',
        };
    }
}