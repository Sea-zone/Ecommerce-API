import {
    Entity,
    EntityRepositoryType,
    PrimaryKey,
    Property,
} from '@mikro-orm/core';
import { CustomerRepository } from './customer.repository';
@Entity({
    tableName : 'customers',
    repository: () => CustomerRepository,
})

export class CustomerEntity{
    @PrimaryKey()
    id: number;

    @Property({ nullable: false })
    name: string;

    @Property()
    address: string;

    @Property({ nullable: false })
    age: number;

    @Property({nullable:false})
    password: string;

    @Property({ nullable: false })
    phoneNumber: number;

  [EntityRepositoryType]: CustomerRepository;
}
