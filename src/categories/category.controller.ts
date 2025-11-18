import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CategoryService } from "./category.service";

@Controller('category')
@ApiTags('Category')
export class CategoryController { 
    constructor(private readonly categoryservice: CategoryService){}

    

}
