'use strict'

import './index.css'

import { routes, router } from './router.js'
import { iconMenu, language } from './views/function.js'

window.addEventListener('popstate', router)

window.onload = function () {
  let a = window.location.href
  const k = a.indexOf('#')

  a = a.slice(k)
  if (k === -1) a = '#'
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
}

window.onunload = function () {
  localStorage.clear()
}

document.getElementById('forFunctionLanguage').onclick = language
document.getElementById('iconMenu').onclick = iconMenu
