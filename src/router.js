import { fillOrder } from './views/order.js'
import { fillAction } from './views/action.js'
import { fillPageCategory } from './views/home.js'
import { fillOneAction } from './views/oneAction.js'
import { fillOneProduct } from './views/oneProduct.js'

export const routes = [
  { path: '#action', view: fillAction },
  { path: '#home', view: fillPageCategory },
  { path: '#', view: fillPageCategory },
  { path: '#action/', view: fillOneAction },
  { path: '#product/', view: fillOneProduct },
  { path: '#order', view: fillOrder }

]

export function router () {
  let a = window.location.href
  const k = a.indexOf('#')
  a = a.slice(k)
  const d = a.indexOf('/')
  if (d === -1) {
    for (let i = 0; i < routes.length; i++) {
      if (a === routes[i].path) {
        document.getElementById('mainBlock').innerHTML = ''
        routes[i].view()
      }
    }
  } else {
    const f = a.slice(d + 1)
    a = a.slice(0, d + 1)
    for (let i = 0; i < routes.length; i++) {
      if (a === routes[i].path) {
        document.getElementById('mainBlock').innerHTML = ''
        routes[i].view(f)
      }
    }
  }

  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0
}
