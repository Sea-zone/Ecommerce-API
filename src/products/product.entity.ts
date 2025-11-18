import { ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";

export class Product {

    @PrimaryKey()
    id: number;

    @Property()
    title: string;

    @Property()
    description: string;

    @Property()
    categoryId: string;

    @Property()
    createdAt: string;

    @Property()
    udpatedAt: string;

    @ManyToOne

}