import { Controller, Get, Logger } from '@nestjs/common';

@Controller('frontend')
export class FrontendController {


    @Get("/")
    getFrontend() {
	let people = ['geddy', 'neil', 'alex'];
        return this.render("html/index.html", {people: people});
    }
    render(filepath: string, data){
	let logger = new Logger("Frontend.Controller");
	let ejs = require('ejs');
	var read = require('fs').readFileSync;
	logger.log("Filename: "+filepath);
	
	var options = {encoding: 'utf-8', flag: 'r'};
	var template = read(filepath, options);
	let html = ejs.render(template, data);
	logger.log("html: " + html);
	return html;
    }
}
