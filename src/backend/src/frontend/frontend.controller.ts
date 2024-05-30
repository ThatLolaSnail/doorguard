import { Controller, Get } from '@nestjs/common';

@Controller('frontend')
export class FrontendController {

    @Get("/")
    getFrontend() {
	let ejs = require('ejs');
	var read = require('fs').readFileSync;
	let people = ['geddy', 'neil', 'alex'];
	//let html = ejs.render(read("/home/lola/Documents/test.html"), {people: people});
	let html = ejs.render('<%= people.join(", "); %>', {people: people});
	//let html = ejs.compile("test.html", {people: people});
        return html; //read('test.html');//html;
    }
}
