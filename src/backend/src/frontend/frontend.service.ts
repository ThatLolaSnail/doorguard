import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class FrontendService {
    //private readonly logger = new Logger("Frontend");

    constructor(){
    }

	render(filepath: string, data){
		let logger = new Logger("Frontend.Controller");
		let ejs = require('ejs');
		logger.log("Filename: "+filepath);
		
		//var read = require('fs').readFileSync;
		//let options = {encoding: 'utf-8', flag: 'r'};
		//let template = read(filepath, options);
		//let html = ejs.render(template, data, {filename: filepath});

		let html=""; let error="";
		ejs.renderFile(filepath, data, function(err,str){
		    html = str; error= err;
		});
		if (error!=null){
		    logger.log(error);
		    return "Error while rendering the ejs template...";
		}
		return html;
	}
	
	getIndex() {
	    return this.render("html/index.html", {});
	}

	getSettings() {
	    return this.render("html/settings.html", {});
	}

	getAdvanced() {
	    return this.render("html/advanced.html", {});
	}

    	getLog() {
	    return this.render("html/log.html", {});
	}

    	getTest() {
	    return this.render("html/test.html", {});
	}
}
