import { HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { CategoryDto } from "./category.dto";
import { CategoryRepository } from "./category.repository";

@Injectable()

export class CategoryService {

    constructor(private readonly categoryRepo: CategoryRepository) { }

    async createCategory(categoryDto: CategoryDto) {
        const category = this.categoryRepo.create({
            name: categoryDto?.name,
            createdAt: categoryDto?.createdAt,
            updatedAt: categoryDto?.updatedAt,

        });
        await this.categoryRepo.getEntityManager().persistAndFlush(category);
    }

    async udpateCategory(categoryDto: CategoryDto, id: number) {
        const oldCategory = await this.categoryRepo.findOne(id);
        if (oldCategory == null) {
            throw new NotFoundException(HttpStatus.NOT_FOUND, 'category not found');
        }
        const category = this.categoryRepo.create({
            name: categoryDto?.name,
            createdAt: categoryDto?.createdAt,
            updatedAt: categoryDto?.updatedAt,

        });
        await this.categoryRepo.getEntityManager().persistAndFlush(category);
        return {
            message: 'category updated successfully',
            category: category,
        };
    }
}