import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class FrontendService {
    //private readonly logger = new Logger("Frontend");

    constructor(){
	//this.logger.log("Hello World");
	//let ejs = require('ejs');
	//let people = ['geddy','Fritz'];
	//let html = ejs.render('<% people.join(", "); %>', {people: people});
	//this.logger.log(html);

    }

	lolaFunction() {
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
