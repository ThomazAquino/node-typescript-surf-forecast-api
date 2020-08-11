import { Controller, Get } from '@overnightjs/core';
import { Request, Response } from 'express';


// This decoretor creates a router '/forecast'.
@Controller('forecast')
export class ForecastController {

  @Get('')
  public getForecastForLoggedUser(_: Request, res: Response): void {
    res.send()
  }
}

