import { EntityRepository } from "@mikro-orm/postgresql";
import { Profile } from './profile.entity';
//enity repo bhaneko micro  orm ko class
export class ProfileRepository extends EntityRepository<Profile>{ }
