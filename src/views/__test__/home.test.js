const fetch = require("node-fetch");
import {fillPageCategory} from '../home'


const {promisedCategory, promisedPizza} = require('../../getJson.js')
module.exports = {promisedCategory, promisedPizza}

describe('Home Page Module', () => {
    it('should fill home pager', () => {
    	let categories = 0;
    	let pizas = [];
    	 promisedCategory.then((category) => {
        	categories = category.length
    		for (let key in category) {
    			pizas.push(0);
	        promisedPizza.then((pizza) => {
			      if (pizza.length > 0) {
		        	for (let key1 in pizza) {

		            	if(pizza[key1].category == category[key].nameId){
		            		pizax[key]++;
			               }
			        }
			    }           
			})
	    	}
		})
        document.body.innerHTML = '<div id="mainBlock"></div>';
		fillPageCategory();
       
		expect(document.getElementById("mainBlock").childNodes.length).toBe(categories);
		for(let i = 0; i < pizas.length; i++){
			expect(document.getElementById("mainBlock").childNodes[i].length).toBe(pizas[i]);
		}       		

    });    
});