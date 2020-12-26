
import { fillOrder } from './order.js'
import { countSuma } from './basket.js'

export const plusOrMinusProduct = (id, size, bull) => {
  if (bull) {
    const keys = Object.keys(localStorage)
    for (const key of keys) {
      if (key == id) {
        const f = localStorage.getItem(id) + size
        localStorage.setItem(id, f)
        document.getElementById('mainBlock').innerHTML = ''
        fillOrder()
        countSuma()
      }
    }
  } else {
    const keys = Object.keys(localStorage)
    for (const key of keys) {
      if (key == id) {
        let f = localStorage.getItem(id)
        for (let i = 0; i < f.length; i++) {
          if (f[i] === size) {
            if (f.length === 1) localStorage.removeItem(id)
            f = f.slice(0, i) + f.slice(i + 1)
            break
          }
        }
        localStorage.setItem(id, f)
        document.getElementById('mainBlock').innerHTML = ''
        fillOrder()
        countSuma()
      }
    }
  }
}

export const deleteOrder = (id, size) => {
  const keys = Object.keys(localStorage)
  for (const key of keys) {
    if (key == id) {
      let f = localStorage.getItem(id)
      for (let i = f.length; i >= 0; i--) {
        if (f[i] == size) {
          if (f.length == 1) localStorage.removeItem(id)
          f = f.slice(0, i) + f.slice(i + 1)
        }
      }
      localStorage.setItem(id, f)
      document.getElementById('mainBlock').innerHTML = ''
      fillOrder()
      countSuma()
    }
  }
}
