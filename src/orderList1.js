
export {fillOrderList};

const link = 'https://my-json-server.typicode.com/NastiaBondarenko/db';
const link2 = 'https://my-json-server.typicode.com/NastiaBondarenko/db2';

 const promisedAction1 = getContent(`${link2}/action`);
 const promisedCategory1 = getContent(`${link}/category`);
const promisedPizza1 = getContent(`${link}/pizza`);
 const promisedIngridients1 = getContent(`${link}/ingridients`);

function getContent(url) {
    return fetch(url).then(content => content.json());
}


const fillOrderList = (product)=>{
	let suma = 0;
	promisedPizza1.then((pizza) => {
		let size = ['Маленька', 'Середня', 'Велика']
		if (pizza.length > 0) {
		    for (let key1 in pizza) {
	    		for(let i = 0; i < product.length; i++){
	    			if(pizza[key1].id == product[i][0]){
	    				for(let j = 0; j < product[i][1].length; j++){
	    					if(product[i][1][j]!=0){
	    						suma = suma+pizza[key1].price[j]*product[i][1][j]
	    						document.getElementById("mainBlockOrder").innerHTML += `
	    						<div class="productInOrder">
									<img src="`+pizza[key1].images+`" class="pictureproductInOrder">
									<div class="mainPartOrederForm">
										<div class="textBlockInOrder">
											<h1>`+pizza[key1].productName+`</h1>
											<img id ="deleteOrder`+pizza[key1].id+`"  src="picture/x2.png">
										</div>
										<div class="ingredInOrder">	
												<p>Моцарела Соус Domino's</p>
												<p>`+size[j]+`</p>
										</div>
										<div class="priseAndNumber">
											<div><strong>`+pizza[key1].price[j]+`грн</strong></div>
											<div class="numberOrder">
												<button id="plusProduct`+pizza[key1].id+`" >+</button>
												<p>`+product[i][1][j]+`</p>
												<button id = "MinusProduct`+pizza[key1].id+`" >-</button>
											</div>
										</div>
									</div>
								</div>
								<div class="greyline"></div>	
	    						`

	    						const plusProductForOnclick = () => {
	    							plusOrMinusProduct(pizza[key1].id, j, true )
	    						}
	    						const MinusProductForOnclick = () => {
	    							plusOrMinusProduct(pizza[key1].id, j, false )
	    						}
	    						const deleteOrderForOnclick =() =>{
	    							deleteOrder(pizza[key1].id,j);
	    						}
	    						let id = "plusProduct" + pizza[key1].id;
	    						let id2 = "MinusProduct"+pizza[key1].id;
	    						let id3 = "deleteOrder"+pizza[key1].id;
	    						document.getElementById(id).onclick  = plusProductForOnclick;
	    						document.getElementById(id2).onclick  = MinusProductForOnclick;
	    						document.getElementById(id3).onclick  = deleteOrderForOnclick;
	    					}
	    				}
	    			}
	    		}
			}
		}
		suma=Math.floor(suma*100)/100;
		let k = suma+'грн';
		document.getElementById("priseOrder").innerHTML = k;
	})
}


const basketShow = (suma, count) =>{
	let result = suma+'грн'
		if(count<10){
			document.getElementById("counter").innerHTML = '0'+count;
		} 
		else document.getElementById("counter").innerHTML =count;
		document.getElementById("basketPay").innerHTML = result;
		document.getElementById("basketPay").hidden = "";

}

const countSuma = () =>{

	let count = 0; 
	let suma = 0;
	let keys = Object.keys(localStorage);
	  promisedPizza1.then((pizza) => {
		if (pizza.length > 0) {
			for(let key of keys) {
		 		 let h = localStorage.getItem(key);
		  		count = count + h.length;
			    for (let key1 in pizza) {
			    	if(pizza[key1].id == key){
			    		for(let j = 0; j < h.length; j++){
			    			suma=suma+pizza[key1].price[h[j]];
			    		}
			    	}
			    }
			}
		}
		suma=Math.floor(suma*100)/100;
 	basketShow(suma, count);
	}) 
}

const plusOrMinusProduct = (id, size, bull) =>{
	if(bull){
		let keys = Object.keys(localStorage);
    	for(let key of keys) {
    		if(key == id){
				let f = localStorage.getItem(id)+ size;
				localStorage.setItem(id, f) ;
				document.getElementById("mainBlock").innerHTML =``
				fillOrder();
				countSuma();
	
    		}
    	}		
	}
	else{
		let keys = Object.keys(localStorage);
    	for(let key of keys) {
    		if(key == id){
				let f = localStorage.getItem(id);
				for(let i = 0; i < f.length; i++){
					if(f[i]==size){
						if(f.length == 1) localStorage.removeItem(id)
						 f = f.slice(0, i) + f.slice(i+1);
						 break;
					}
				}
				localStorage.setItem(id, f);
				document.getElementById("mainBlock").innerHTML =``
				fillOrder();
				countSuma();
	
    		}
    	}		
	}
}


const deleteOrder = (id, size)=>{
	let keys = Object.keys(localStorage);
    	for(let key of keys) {
    		if(key == id){
				let f = localStorage.getItem(id);
				for(let i = f.length; i >= 0; i--){
					if(f[i]==size){
						if(f.length == 1) localStorage.removeItem(id)
						 f = f.slice(0, i) + f.slice(i+1);
						 
					}
				}
				localStorage.setItem(id, f);
				document.getElementById("mainBlock").innerHTML =``
				fillOrder();
				let count = 0; 
				let suma = 0;
				let keys = Object.keys(localStorage);
				 countSuma();
	
    		}
    	}		
	
}
