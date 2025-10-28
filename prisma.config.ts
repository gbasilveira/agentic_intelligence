import path from 'node:path';
import { defineConfig } from 'prisma/config';

import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  earlyAccess: true,
  schema: path.join('app', 'api', 'prisma', 'schema.prisma'),
});
