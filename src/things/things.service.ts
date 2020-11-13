import { Injectable } from '@nestjs/common';

@Injectable()
export class ThingsService {
  getThing1(): string {
    return 'Thing 1';
  }

  getThing2(): string {
    return 'Thing 2';
  }
}
