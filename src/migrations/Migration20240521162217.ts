import { Migration } from '@mikro-orm/migrations';

export class Migration20240521162217 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "customers" add column "password" varchar(255) not null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "customers" drop column "password";');
  }

}
