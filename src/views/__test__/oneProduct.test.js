const fetch = require("node-fetch");
import {fillOneProduct} from '../oneProduct.js'
import {promisedPizza , promisedIngridients} from '../../getJson.js';


describe('OneProduct Page Module', () => {
    it('should fill oneProduct pager', () => {

        document.body.innerHTML = '<div id="mainBlock"></div>';
        
        let value = [];
        promisedPizza.then((pizza) => {
        if (pizza.length > 0) {
           for (let key1 in pizza) {
            	if(pizza[key1].id == id){
            		active = key1
            		value[key1]= `
            		<div class="mainBlockProduct">
					        <div class="pictureProduct">

								<img src="picture/2pizza`+pizza[key1].id+`.jpg" class="picture2Pizza">
								<div><h2>Інші продукти</h2></div>
								<div class="friend" id="friend">`

					
					 promisedPizza.then((pizza) => {
		        if (pizza.length > 0) {
		            for (let key1 in pizza) {
		            	if(pizza[key1].id != id && pizza[key1].category == pizza[active].category ){
		            		value[key1] += `
		            			<a class="friendPizzas" href="#product/`+pizza[key1].id+`">
									<img src="picture/pizza`+pizza[key1].id+`.jpg" class="friendImg">
									<p>`+pizza[key1].productName+`</p>
								</a>
		            		`
		            	}
		            }
		        }
		        })
		        .then(()=>{
		        	value += `</div>
							</div>
							<div class="ingredients">
								<div><strong><h2>`+pizza[key1].productName+`</h2></strong></div>

								<p>Інгредієнти</p>
								<div class="ingreds" id = "ingreds">`
		        }) 				
					 promisedIngridients.then((ingred) => {
					    if (ingred.length > 0) {
					         for (let key2 in ingred) {
								for(let i = 0; i < pizza[key1].ingridients.length; i++){
									if(pizza[key1].ingridients[i] == ingred[key2].id){	
										value+= 
									`<div class="ingred">
										<img src="picture/ingred`+ingred[key2].id+`.jpg" class="ingredImg">
										`+ingred[key2].name+`
									</div>
									`
									}
								}
							}
						}
					})	
					.then(()=>{
						 value += `  </div>
								<div class="priceAndBaskOneProduct">
									<p class="priceOneProduct"><strong>Від `+pizza[key1].price[0]+`грн</strong></p>
									<div class="basketRed" id="basketRedForOnclick" )">В кошик</div>
								</div>
							</div>
					</div>

					`
					}) 

            }
        }
        }
	})	
        for(let i = 0; i < value.length; i++){
		  expect(fillOneProduct(i+1)).toBe(value[i]);
	   }
    });  
 })   




