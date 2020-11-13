import { Injectable } from '@nestjs/common';
import { Thing } from './thing';

@Injectable()
export class ThingsService {
  getThing1(): string {
    return 'Thing 1';
  }

  getThing2(): Thing {
    return { name: 'Thing 2' };
  }
}
