import { Migration } from '@mikro-orm/migrations';

export class Migration20241206112222 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table if not exists "post" ("id" text not null, "title" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "post_pkey" primary key ("id"));');
    this.addSql('CREATE INDEX IF NOT EXISTS "IDX_post_deleted_at" ON "post" (deleted_at) WHERE deleted_at IS NULL;');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "post" cascade;');
  }

}
