
import { basketShow } from './basket.js'
import { promisedPizza } from '../getJson'

export const sendServer = (form) => {
  fetch('https://my-json-server.typicode.com/NastiaBondarenko/db2/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  })

    .then(response => response.json())
    .then(data => {
      const orderId = data.id
      history.pushState({}, null, '#order/' + orderId.toString())
      document.getElementById('mainBlock').innerHTML = ''
      if (form.street != null) {
        document.getElementById('mainBlock').innerHTML = `
                 <h2>Номер замовлення ` + orderId + `</h2>
                 <p>` + form.name + `</p>
                  <p>` + form.email + `</p>
                  <p>` + form.number + `</p>
                  <p>` + form.town + ', ' + form.street + ', ' + form.house + ' ' + form.flat + `</p>
                  <p>` + form.day + ' ' + form.time + `</p>
                  <p>` + form.suma + `</p>

                 `
      } else {
        document.getElementById('mainBlock').innerHTML = `
                 <h2>Номер замовлення ` + orderId + `</h2>
                 <p>` + form.name + `</p>
                  <p>` + form.email + `</p>
                  <p>` + form.number + `</p>
                  <p>` + form.town + ', ' + form.restor + `</p>
                  <p>` + form.day + ' ' + form.time + `</p>
                  <p>` + form.suma + `</p>

                 `
      }
      const production = []
      console.log(form.product)
      const size = ['Маленька', 'Середня', 'Велика']
      promisedPizza.then((pizza) => {
        if (pizza.length > 0) {
          for (const key1 in pizza) {
            for (let i = 0; i < form.product.length; i++) {
              const prod = [0, 0, 0]
              if (form.product[i][0] === pizza[key1].id) {
                const h = form.product[i][1]
                for (let j = 0; j < h.length; j++) {
                  prod[h[j]]++
                }
                for (let j = 0; j < 3; j++) {
                  if (prod[j] !== 0) production.push([pizza[key1].productName, size[j], prod[j], prod[j] * pizza[key1].price[j]])
                }
              }
            }
          }
        }
        for (let i = 0; i < production.length; i++) {
          document.getElementById('mainBlock').innerHTML += `
<p>` + production[i] + '</p>'
        }
      })
    })
  localStorage.clear()
  basketShow(0, 0)
}

export const order = (bull) => {
  if (document.getElementById('counter').innerHTML !== '00') {
    const form10u = document.getElementById('form10').elements
    const form9u = document.getElementById('form9').elements
    const form8u = document.getElementById('form8').elements
    const form7u = document.getElementById('adressInput2').elements
    const form6u = document.getElementById('form6').elements
    const form5u = document.getElementById('form5').elements
    const form4u = document.getElementById('form4').elements
    const form3u = document.getElementById('form3').elements
    const form2u = document.getElementById('form2').elements
    const form1u = document.getElementById('form1').elements
    const product = []
    const keys = Object.keys(localStorage)
    for (const key of keys) {
      product.push([key, localStorage.getItem(key)])
    }
    if (bull === 1) {
      if (form1u.name.value === '' || form1u.number.value === '' ||
form1u.email.value === '' || form2u.town.value === '' ||
form2u.street.value === '' || form2u.house.value === '') {
        alert('Заповніть форму')
      } else {
        const form = {
          name: form1u.name.value,
          number: form1u.number.value,
          email: form1u.email.value,
          town: form2u.town.value,
          street: form2u.street.value,
          house: form2u.house.value,
          flat: form2u.flat.value,
          pidizd: form2u.pidizd.value,
          cod: form2u.cod.value,
          poverh: form2u.poverh.value,
          coment: form2u.coment.value,
          day: form3u.day.value,
          time: form4u.time.value,
          action: form5u.action.value,
          reshta: form5u.reshta.value,
          typePay: form5u.typePay.value,
          product: product,
          suma: document.getElementById('basketPay').innerHTML
        }
        sendServer(form)
      }
    } else {
      if (form6u.name.value === '' ||
form6u.number.value === '' ||
form6u.email.value === '' ||
form7u.town.value === '' ||
form7u.restor.value === '') {
        alert('Заповніть форму')
      } else {
        const form = {
          name: form6u.name.value,
          number: form6u.number.value,
          email: form6u.email.value,
          town: form7u.town.value,
          restor: form7u.restor.value,
          coment: form7u.coment.value,
          day: form8u.day.value,
          time: form9u.time.value,
          action: form10u.action.value,
          reshta: form10u.reshta.value,
          typePay: form10u.typePay.value,
          product: product,
          suma: document.getElementById('basketPay').innerHTML
        }
        sendServer(form)
      }
    }
  }
}
