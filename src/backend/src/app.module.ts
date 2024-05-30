// Zuständigkeit: M
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BellManagerModule } from './bellmanager/bellmanager.module';
import { DoorModule } from './door/door.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { LoggerModule } from 'nestjs-pino';
import { ButtonModule } from './button/button.module';
import { BellModule } from './bell/bell.module';
import { DatabaseModule } from './database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuardEvent } from './database/entitys/guardevent.entity';
import { BeautifulModule } from './beautiful/beautiful.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [GuardEvent],
      synchronize: true,
    }),
    BellManagerModule, 
    DoorModule, 
    EventEmitterModule.forRoot(), 
    LoggerModule.forRoot({
    pinoHttp: {
      transport: {
        targets: [
          { level: 'debug', target: 'pino-pretty', options: { singleLine: true, ignore: "hostname,pid" } },
          { level: 'info', target: 'pino/file', options: { destination: `${__dirname}/app.log`, ignore: "hostname" } },
        ],
      },
      level: 'debug',
    },
  }), ButtonModule, BellModule, DatabaseModule, BeautifulModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
