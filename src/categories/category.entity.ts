import { EntityRepositoryType, Property } from "@mikro-orm/core";
import { CategoryRepository } from "./category.repository";
export class Category {

    @Property()
    id: number;

    @Property()
    name: string;

    @Property()
    createdAt: Date;

    @Property()
    updatedAt: Date;

    [EntityRepositoryType]: CategoryRepository;
}