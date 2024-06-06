import { Controller, Get, Logger, Redirect } from '@nestjs/common';
import { FrontendService } from './frontend.service';

@Controller('frontend')
export class FrontendController {

	constructor(private service: FrontendService){}

    @Get("/")
    getIndex() {
	return this.service.getIndex();
    }
    
    @Get("/settings")
    getSettings() {
	return this.service.getSettings();
    }
    
    @Get("/advanced")
    getAdvanced() {
	return this.service.getAdvanced();
    }
    
    @Get("/log")
    getLog() {
	return this.service.getLog();
    }
    
    @Get("/test")
    getTest() {
	return this.service.getTest();
    }
    @Get("/test/doorbell")
    @Redirect('/frontend/test')
    getTestDoorbell() {
	this.service.testDoorbell();
    }
    
    
    
}
