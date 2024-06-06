import { Injectable, Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { ButtonEvent } from 'src/events/button.event';

@Injectable()
export class FrontendService {
    private readonly logger = new Logger("Frontend.Controller");

    constructor(private events: EventEmitter2) {
    }

	render(filepath: string, data){
		let ejs = require('ejs');
		//this.logger.log("Filename: "+filepath);
		
		//var read = require('fs').readFileSync;
		//let options = {encoding: 'utf-8', flag: 'r'};
		//let template = read(filepath, options);
		//let html = ejs.render(template, data, {filename: filepath});

		let html=""; let error="";
		ejs.renderFile(filepath, data, function(err,str){
		    html = str; error= err;
		});
		if (error!=null){
		    this.logger.log(error);
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
    	testDoorbell() {
	    this.logger.log('Button on website pressed');
	    this.events.emit(
		'button.pressed',
		new ButtonEvent(),
	    );
	}
}
