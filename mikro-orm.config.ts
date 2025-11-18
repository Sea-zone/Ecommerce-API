import { defineConfig } from '@mikro-orm/core';
import { pgConfig } from 'src/database/config';
const MikroOrmDataSource = defineConfig(pgConfig);
export default MikroOrmDataSource;
