// Add testRequest type to global interface of NodeJS.
// To not be treated as a local module by typescript, this file cannot have normal imports. That's why the inline imports.
// See: https://stackoverflow.com/questions/39040108/import-class-in-definition-file-d-ts/51114250#51114250
declare namespace NodeJS {
  interface Global {
    testRequest: import('supertest').SuperTest<import('supertest').Test>;
  }
}
