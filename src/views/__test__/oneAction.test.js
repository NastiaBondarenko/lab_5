const fetch = require("node-fetch");
import {fillOneAction} from '../oneAction.js'
import {promisedAction} from '../../getJson.js';


describe('OneAction Page Module', () => {
    it('should fill oneAction pager', () => {
    	
       
        document.body.innerHTML = '<div id="mainBlock"></div>';
        
        let value = [];
        promisedAction.then((action) => {
        if (action.length > 0) {
            for (let key in action) {

                value[key]= `
                            <div class="greyline"></div>
                             <div class="action">
                                <img class="actionImg" src="`+action[key].image+`">
                                <div class="actionContent">
                                    <div class="actionText">
                                        <h3>`+action[key].date+`</h3>
                                        <h1>`+action[key].name+`</h1>
                                        <p>`+action[key].discription+`</p>
                                    </div>
                                    <div class="actionButtuns">
                                            <button class="actionButtun actionButtun2" onclick="activeCupon(`+action[key].id+`)">Активувати купон</button>
                                    </div>
                                </div>  
                    </div>
                    
                 `
      
            }    
        }
        })
        for(let i = 0; i < value.length; i++){
		  expect(fillOneAction(i+1)).toBe(value[i]);
	   }
    });  
 })   
