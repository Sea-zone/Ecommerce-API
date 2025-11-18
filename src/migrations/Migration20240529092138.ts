import { Migration } from '@mikro-orm/migrations';

export class Migration20240529092138 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "profiles" ("id" serial primary key, "address" varchar(255) not null, "education" varchar(255) not null, "picture" varchar(255) not null, "job" varchar(255) not null, "bankdetails" varchar(255) not null, "user_id" int null);');
    this.addSql('alter table "profiles" add constraint "profiles_user_id_unique" unique ("user_id");');

    this.addSql('create table "orders" ("id" serial primary key, "product_id" varchar(255) not null, "quantity" varchar(255) not null, "price" varchar(255) not null, "updated_at" timestamptz not null, "created_at" timestamptz not null, "user_id" int null, "order_date" timestamptz not null);');

    this.addSql('alter table "profiles" add constraint "profiles_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade on delete set null;');

    this.addSql('alter table "orders" add constraint "orders_user_id_foreign" foreign key ("user_id") references "users" ("id") on update cascade on delete set null;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "profiles" cascade;');

    this.addSql('drop table if exists "orders" cascade;');
  }

}
