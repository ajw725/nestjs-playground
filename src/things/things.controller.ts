import { Controller, Get } from '@nestjs/common';
import { ThingsService } from './things.service';

@Controller('/things')
export class ThingsController {
  constructor(private readonly thingsService: ThingsService) {}

  @Get('/1')
  getThing1(): string {
    return this.thingsService.getThing1();
  }

  @Get('/2')
  getThing2(): string {
    return this.thingsService.getThing2();
  }
}
