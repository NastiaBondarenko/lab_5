const fetch = require("node-fetch");
import {fillPageCategory} from '../home.js';
import {countSuma, saveBasket, basket, basketShow} from '../basket.js';


describe('basketShow work', () => {
    it('basketShow work', () => {
       document.body.innerHTML = '<div class="basket"> <div class="imgBasket"> <p id="counter">00</p> <img class="iconBasket" src="picture/basket1.png"></div><p hidden id="basketPay">00.00грн</p> <button class="order"> <a href="#order"> <h3>Замовити</h3> </a></button> </div>'
         let value ='<div class="basket"> <div class="imgBasket"> <p id="counter">01</p> <img class="iconBasket" src="picture/basket1.png"></div><p id="basketPay">97.55грн</p> <button class="order"> <a href="#order"> <h3>Замовити</h3> </a></button> </div>'
      	basketShow(97.55, 1)
        expect(document.body.innerHTML).toBe(value);
       document.body.innerHTML = '<div class="basket"> <div class="imgBasket"> <p id="counter">00</p> <img class="iconBasket" src="picture/basket1.png"></div><p hidden id="basketPay">00.00грн</p> <button class="order"> <a href="#order"> <h3>Замовити</h3> </a></button> </div>'
        value ='<div class="basket"> <div class="imgBasket"> <p id="counter">02</p> <img class="iconBasket" src="picture/basket1.png"></div><p id="basketPay">197.55грн</p> <button class="order"> <a href="#order"> <h3>Замовити</h3> </a></button> </div>'
      	basketShow(197.55, 2)
       expect(document.body.innerHTML).toBe(value);
       document.body.innerHTML = '<div class="basket"> <div class="imgBasket"> <p id="counter">00</p> <img class="iconBasket" src="picture/basket1.png"></div><p hidden id="basketPay">00.00грн</p> <button class="order"> <a href="#order"> <h3>Замовити</h3> </a></button> </div>'
         value ='<div class="basket"> <div class="imgBasket"> <p id="counter">05</p> <img class="iconBasket" src="picture/basket1.png"></div><p id="basketPay">1197.55грн</p> <button class="order"> <a href="#order"> <h3>Замовити</h3> </a></button> </div>'
      	basketShow(1197.55, 5)
       expect(document.body.innerHTML).toBe(value);

 });   
})


