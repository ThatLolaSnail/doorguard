import { Controller, Get, Logger } from '@nestjs/common';
import { FrontendService } from './frontend.service';

@Controller('frontend')
export class FrontendController {

	constructor(private service: FrontendService){}

    @Get("/")
    getFrontend() {
		return this.service.lolaFunction();
    }
    
}
