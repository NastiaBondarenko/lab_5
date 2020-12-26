const fetch = require("node-fetch");
import {fillAction} from '../action.js'
import {promisedAction} from '../../getJson.js';


describe('action Page Module', () => {
    it('should fill action pager', () => {
    	let actions = 0;
    	 promisedAction.then((action) => {
        	actions = action.length
    	})
       
        document.body.innerHTML = '<div id="mainBlock"></div>';
		fillAction();
       
		expect(document.getElementById("mainBlock").childNodes.length).toBe(actions);
		       		
		               
    });    
});