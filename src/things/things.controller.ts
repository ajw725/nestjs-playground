import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { Thing } from './thing';
import { ThingsService } from './things.service';

@Controller('things')
export class ThingsController {
  constructor(private readonly thingsService: ThingsService) {}

  @Get('1')
  getThing1(@Req() req: Request): string {
    const fooVal = req.query.foo as string;
    return this.thingsService.getThing1(fooVal);
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
