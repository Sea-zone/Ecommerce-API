import { IsNotEmpty } from "class-validator";

export class OrderDto {


    @IsNotEmpty()
    userId: number;
    @IsNotEmpty()
    productId: string;
    @IsNotEmpty()
    quantity: string;
    @IsNotEmpty()
    price: string;
    @IsNotEmpty()
    updatedAt: string;
    @IsNotEmpty()
    createdAt: string;
    @IsNotEmpty()
    orderDate: string;


}