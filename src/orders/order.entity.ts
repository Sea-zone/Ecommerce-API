import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { UserEntity } from "src/user/user.entity";
import { OrderRepository } from "./order.repository";


@Entity({
    tableName: 'orders',
    repository: () => OrderRepository
})

export class Order {
    @PrimaryKey()
    id: number;

    @Property()
    productId: string;

    @Property()
    quantity: string;

    @Property()
    price: string;

    @Property()
    updatedAt: Date;

    @Property()
    createdAt: Date;

    @ManyToOne(() => UserEntity, {
        referenceColumnName: 'id',
        name: 'user_id',
        nullable: true
    })

    userId: number;

    @Property()
    orderDate: Date;
}