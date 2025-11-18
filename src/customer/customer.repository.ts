import { EntityRepository } from '@mikro-orm/postgresql';
import { CustomerEntity } from './customer.entity';
export class CustomerRepository extends EntityRepository<CustomerEntity> {}