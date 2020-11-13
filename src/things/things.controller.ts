import { Controller, Get, Req, Res, Query, Param } from '@nestjs/common';
import { Request, Response } from 'express';
import { Thing } from './thing';
import { ThingsService } from './things.service';

@Controller('things')
export class ThingsController {
  constructor(private readonly thingsService: ThingsService) {}

  @Get('thing1')
  getThing1(@Req() req: Request): string {
    const fooVal = req.query.foo as string;
    return this.thingsService.getThing1(fooVal);
  }

  @Get('thing2')
  getThing2(): Thing {
    return this.thingsService.getThing2();
  }

  @Get('foo')
  getFoo(@Query('foo') foo: string) {
    return this.thingsService.getThing1(foo);
  }

  @Get(':id')
  findOne(@Param() params): Thing {
    console.log('id:', params.id);
    return { name: `Thing ${params.id}` };
  }

  @Get('forbidden')
  getForbidden(@Res() res: Response): void {
    res.status(403).send({ error: 'Forbidden' });
  }
}
