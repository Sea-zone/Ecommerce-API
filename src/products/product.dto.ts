import { IsNotEmpty } from "class-validator";

export class ProductDto {

    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    description: string;
    @IsNotEmpty()
    categoryId: string;
    @IsNotEmpty()
    createdAt: string;
    @IsNotEmpty()
    updatedAt: string;
}