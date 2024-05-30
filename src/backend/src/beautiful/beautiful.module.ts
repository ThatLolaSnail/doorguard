import { Module } from '@nestjs/common';
import { BeautifulService } from './beautiful.service';

@Module({
  providers: [BeautifulService],
  exports: [BeautifulService]
})
export class BeautifulModule {}
