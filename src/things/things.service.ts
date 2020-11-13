import { Injectable, Logger } from '@nestjs/common';
import { Thing } from './thing';

@Injectable()
export class ThingsService {
  private readonly logger = new Logger(ThingsService.name);

  getThing1(fooVal?: string): string {
    return fooVal || 'Thing 1';
  }

  getThing2(): Thing {
    return { name: 'Thing 2' };
  }
}
