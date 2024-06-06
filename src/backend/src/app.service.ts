// Zuständigkeit: Kohne
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! You should NOT see this :3';
  }
}