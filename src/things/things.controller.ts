import { Response } from 'express';
import { Controller, Get, Res } from '@nestjs/common';
import { Thing } from './thing';
import { ThingsService } from './things.service';

@Controller('things')
export class ThingsController {
  constructor(private readonly thingsService: ThingsService) {}

  @Get('1')
  getThing1(): string {
    return this.thingsService.getThing1();
  }

  @Get('2')
  getThing2(): Thing {
    return this.thingsService.getThing2();
  }

  @Get('forbidden')
  getForbidden(@Res() res: Response): void {
    res.status(403).send({ error: 'Forbidden' });
  }
}
