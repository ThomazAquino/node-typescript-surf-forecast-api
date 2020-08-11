import './utils/module-alias';
import { Server } from '@overnightjs/core';
import bodyParser from 'body-parser';

export class SetupServer extends Server {
  constructor (private port = 3000) {
    super();
  }

  init(): void {
    this.setupExpress();
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
  }
} 