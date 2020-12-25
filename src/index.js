'use strict'

import './index.css';

import {routes, router} from './router.js';
import {promisedCategory} from './getJson.js';
import {promisedPizza} from './getJson.js';
import {promisedIngridients} from './getJson.js';
import {iconMenu} from './function.js';
import {selfPickup} from './function.js';
import {delivery} from './function.js';
import {language} from './function.js';
import {order} from './formAndSend.js'
import {basketShow} from './functionBaske.js'
import {countSuma} from './functionBaske.js';
import {basket} from './functionBaske.js';
// {orderForOnclick0, orderForOnclick1};




function getContent(url) {
    return fetch(url).then(content => content.json());
}


window.addEventListener('popstate', router);



 window.onload = function() {

   let a = window.location.href;
	let k = a.indexOf('#');

	a = a.slice(k);
	if(k==-1) a = "#";
	let d = a.indexOf('/');
	if(d==-1){

		for(let i = 0; i < routes.length; i++){
			if(a==routes[i].path){
			document.getElementById("mainBlock").innerHTML =``
			 routes[i].view()
		}
	}
	}
	else{
		let f = a.slice(d+1)
		a = a.slice(0,d+1);
		for(let i = 0; i < routes.length; i++){
			if(a==routes[i].path){
			document.getElementById("mainBlock").innerHTML =``
			 routes[i].view(f)
			}
		}
	}	
		
		countSuma();		
  };


window.onunload = function() {
	localStorage.clear()
}


async function getData(url, order) {
    const response = await fetch(url, {
        method: 'post',
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           },
        body: JSON.stringify(order)
    });
  
    return response.json();
  }

document.getElementById("forFunctionLanguage").onclick = language;
document.getElementById("iconMenu").onclick = iconMenu;
