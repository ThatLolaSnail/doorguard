import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class FrontendService {
    private readonly logger = new Logger("Frontend");

    constructor(){
	this.logger.log("Hello World");
	let ejs = require('ejs');
	let people = ['geddy','Fritz'];
	let html = ejs.render('<% people.join(", "); %>', {people: people});
	this.logger.log(html);

    }
}
