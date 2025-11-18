import { Migrator, TSMigrationGenerator } from '@mikro-orm/migrations';
import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

export const pgConfig: MikroOrmModuleSyncOptions = {
  driver: PostgreSqlDriver,
  entities: ['./dist/**/*entity.js'], // path to your JS entities (dist), relative to `baseDir`
  entitiesTs: ['./src/**/*entity.ts'], // path to your TS entities (source), relative to `baseDir`
  host: 'localhost',
  dbName: 'e-com',
  port: 5432,
  user: 'postgres',
  password: 'admin123',
  extensions: [Migrator],
  migrations: {
    tableName: 'migrations',
    path: 'dist/src/migrations',
    pathTs: 'src/migrations',
    generator: TSMigrationGenerator,
    glob: '!(*.d).{js,ts}',
    transactional: true,
    emit: 'ts',
    snapshot: false,
  },
};
