import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { UserRepository } from './user.repository';
@Entity({
  tableName: 'users',
  repository: () => UserRepository, //linking to user repo
})
export class UserEntity {
  @PrimaryKey()
  id: number;

  @Property({ nullable: false })
  name: string;

  @Property()
  address: string;

  @Property({ nullable: false })
  age: number;

  @Property({ nullable: false })
  password: string;

  @Property({ nullable: false })
  phoneNumber: number;

  [EntityRepositoryType]: UserRepository;
  
  
}
