import { Migration } from '@mikro-orm/migrations';

export class Migration20240513054114 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "customers" ("id" serial primary key, "name" varchar(255) not null, "address" varchar(255) not null, "age" int not null, "phone_number" int not null);');

    this.addSql('create table "users" ("id" serial primary key, "name" varchar(255) not null, "address" varchar(255) not null, "age" int not null, "password" varchar(255) not null, "phone_number" int not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "customers" cascade;');

    this.addSql('drop table if exists "users" cascade;');
  }

}
