import { promisedPizza } from '../getJson'
import { plusOrMinusProduct, deleteOrder } from './functionForOrder.js'

export const fillOrderList = (product) => {
  let suma = 0
  const size = ['Маленька', 'Середня', 'Велика']
  promisedPizza.then((pizza) => {
    if (pizza.length > 0) {
      console.log(product)
      for (const key1 in pizza) {
        for (let i = 0; i < product.length; i++) {
          if (pizza[key1].id == product[i][0]) {
            for (let j = 0; j < product[i][1].length; j++) {
              if (product[i][1][j] != 0) {
                suma = suma + pizza[key1].price[j] * product[i][1][j]
                document.getElementById('mainBlockOrder').innerHTML += `
<div class="productInOrder">
<img src="` + pizza[key1].images + `" class="pictureproductInOrder">
<div class="mainPartOrederForm">
<div class="textBlockInOrder">
<h1>` + pizza[key1].productName + `</h1>
<img id ="deleteOrder` + pizza[key1].id + `"  src="picture/x2.png">
</div>
<div class="ingredInOrder">
<p>Моцарела Соус Domino's</p>
<p>` + size[j] + `</p>
</div>
<div class="priseAndNumber">
<div><strong>` + pizza[key1].price[j] + `грн</strong></div>
<div class="numberOrder">
<button id="plusProduct` + pizza[key1].id + `" >+</button>
<p>` + product[i][1][j] + `</p>
<button id = "MinusProduct` + pizza[key1].id + `" >-</button>
</div>
</div>
</div>
</div>
<div class="greyline"></div>`
              }
            }
          }
        }
      }
    }
    suma = Math.floor(suma * 100) / 100
    const k = suma + 'грн'
    document.getElementById('priseOrder').innerHTML = k
  }).then(() => {
    makeOnclick(product)
  })
}

export const makeOnclick = (product) => {
  promisedPizza.then((pizza) => {
    if (pizza.length > 0) {
      for (const key1 in pizza) {
        for (let i = 0; i < product.length; i++) {
          if (pizza[key1].id == product[i][0]) {
            for (let j = 0; j < product[i][1].length; j++) {
              if (product[i][1][j] !== 0) {
                console.log('here')
                const plusProductForOnclick = () => {
                  plusOrMinusProduct(pizza[key1].id, j, true)
                }
                const MinusProductForOnclick = () => {
                  plusOrMinusProduct(pizza[key1].id, j, false)
                }
                const deleteOrderForOnclick = () => {
                  deleteOrder(pizza[key1].id, j)
                }
                const id = 'plusProduct' + pizza[key1].id
                const id2 = 'MinusProduct' + pizza[key1].id
                const id3 = 'deleteOrder' + pizza[key1].id
                document.getElementById(id).onclick = plusProductForOnclick
                document.getElementById(id2).onclick = MinusProductForOnclick
                document.getElementById(id3).onclick = deleteOrderForOnclick
              }
            }
          }
        }
      }
    }
  })
}
