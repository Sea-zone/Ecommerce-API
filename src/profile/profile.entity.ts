import { Entity, EntityRepositoryType, OneToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { UserEntity } from "src/user/user.entity";
import { ProfileRepository } from "./profile.repository";

@Entity({
    tableName: 'profiles',
    repository: () => ProfileRepository,
})

export class Profile {
    @PrimaryKey()
    id: number;

    @Property()
    address: string;

    @Property()
    education: string;

    @Property()
    picture: string;

    @Property()
    job: string;

    @Property({ name: 'bankdetails' })
    bankDetails: string;

    @OneToOne({
        entity: () => UserEntity,
        referenceColumnName: 'id',
        name: 'user_id',
        nullable: true
    })
    userId: number;

    [EntityRepositoryType]: ProfileRepository;



}