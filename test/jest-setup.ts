import { SetupServer } from '@src/server';
import superTest from 'supertest';

// BeforeAll runs before all tests of the app. It initialize the server test.
beforeAll(() => {
  const server = new SetupServer();
  server.init();
  global.testRequest = superTest(server.getApp());
});
