// Zuständigkeit: M

import { Module } from '@nestjs/common';
import { DatabaseController } from './database.controller';
import { DatabaseService } from './database.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuardEvent } from './entitys/guardevent.entity';
import { BeautifulService } from 'src/beautiful/beautiful.service';

@Module({
  imports: [TypeOrmModule.forFeature([GuardEvent])],
  controllers: [DatabaseController],
  providers: [DatabaseService, BeautifulService]
})
export class DatabaseModule {}
