// Zuständigkeit: L
import { Module } from '@nestjs/common';
import { ButtonService } from './button.service';

@Module({
  providers: [ButtonService]
})
export class ButtonModule {}
