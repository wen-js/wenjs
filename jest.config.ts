// jest.config.ts
import type {Config} from '@jest/types';
import path from 'path'
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  rootDir: path.join(__dirname, ''),
  moduleNameMapper: {
    '@src': "<rootDir>/src/index.ts",
    "^@src/(.*)$": "<rootDir>/src/$1",
  },
  // 忽略
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
}
export default config;

// // Or async function
// export default async (): Promise<Config.InitialOptions> => {
//   return {
//     verbose: true,
//   };
// };
