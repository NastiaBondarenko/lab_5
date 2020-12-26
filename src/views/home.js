import { promisedCategory, promisedPizza, promisedIngridients } from '../getJson'
import { basket } from './basket.js'

export const fillPageCategory = () => {
  promisedCategory.then((category) => {
    if (category.length > 0) {
      for (const key in category) {
        document.getElementById('mainBlock').innerHTML += `
<div class="variant" >
<div class="name"><h2>Піцца:` + category[key].Name + `</h2></div>
<div class="pizzas" id="` + category[key].nameId + `"></div>
</div>`

        promisedPizza.then((pizza) => {
          if (pizza.length > 0) {
            for (const key1 in pizza) {
              if (pizza[key1].category === category[key].nameId) {
                document.getElementById(pizza[key1].category).innerHTML += `
<div class="product">
<a href="#product/` + pizza[key1].id + `" class="productA">
<img src="` + pizza[key1].images + `">
<h4>` + pizza[key1].productName + `</h4>
</a>
<p class="margin" id="ingred` + pizza[key1].id + `"></p>
<u>Замінити інгредієнти</u>
<div class="size" id="prod` + pizza[key1].id + `">
<button id="size1ForOnclick` + pizza[key1].id + `"  class="first" >Маленька</button>
<button id="size2ForOnclick` + pizza[key1].id + `"  class="nofirst1">Середня</button>
<button id="size3ForOnclick` + pizza[key1].id + `"  class="nofirst2">Велика</button>
</div>
<div>
<div class="prise" id="prise` + pizza[key1].id + `">
<p> ` + pizza[key1].price[0] + `грн</p>
<p hidden>` + pizza[key1].price[1] + `грн</p>
<p hidden>` + pizza[key1].price[2] + `грн</p>
</div>
<div class="basketRed" id="ForBasketOnclick` + pizza[key1].id + `" >В кошик</div>
</div>
</div>`

                let ingreds = ''
                promisedIngridients.then((ingred) => {
                  if (ingred.length > 0) {
                    for (const key2 in ingred) {
                      for (let i = 0; i < pizza[key1].ingridients.length; i++) {
                        if (pizza[key1].ingridients[i] === ingred[key2].id) {
                          if (ingreds.length !== 0) ingreds = ingreds + ', ' + ingred[key2].name
                          else ingreds = ingred[key2].name
                        }
                        const id = 'ingred' + pizza[key1].id
                        document.getElementById(id).innerHTML = ingreds
                      }
                    }
                  }
                })
              }
              if (key == 3) {
                const id = 'ForBasketOnclick' + pizza[key1].id
                const price = 'prise' + pizza[key1].id
                const funcForbasket = () => {
                  basket(price, pizza[key1].id, true)
                }
                document.getElementById(id).onclick = funcForbasket
              }
            }
          }
        })
      }
    }
  })
}
