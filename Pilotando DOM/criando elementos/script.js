const div = document.createElement('div');
div.innerHTML = 'Olá devs'
const body = document.querySelector('body')
const script = document.querySelector('script')
const header = document.querySelector('header')
body.append(div)
body.prepend(div)
body.insertBefore(div, script)
body.insertBefore(div, header.nextElementSibling) //insertAfter