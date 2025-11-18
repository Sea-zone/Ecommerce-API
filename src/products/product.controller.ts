import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ProductService } from "./product.service";

@Controller('products')
@ApiTags('Products')

export class ProductController {
    constructor(private readonly productService: ProductService) { }
}