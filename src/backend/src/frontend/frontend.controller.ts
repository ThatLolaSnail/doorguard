import { Controller, Get, Logger } from '@nestjs/common';

@Controller('frontend')
export class FrontendController {


    @Get("/")
    getFrontend() {
	let logger = new Logger("Frontend.Controller");
	let ejs = require('ejs');
	var read = require('fs').readFileSync;
	
	var options = {encoding: 'utf-8', flag: 'r'};
	var filename = "test.html";
	var data = read(filename, options);

	let people = ['geddy', 'neil', 'alex'];
	let html = ejs.render(data, {people: people});
	logger.log("html: " + html);
	//let html = ejs.render('<%= people.join(", "); %>', {people: people});
	//let html = ejs.compile("test.html", {people: people});
        return html; //read('test.html');//html;
    }
}
