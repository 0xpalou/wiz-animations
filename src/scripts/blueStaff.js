const top = document.createElement('rect')
top.setAttribute('x', '10')
top.setAttribute('y', '40')
top.setAttribute('width', '20')
top.setAttribute('height', '10')

const mid1 = document.createElement('rect')
mid1.setAttribute('x', '0')
mid1.setAttribute('y', '50')
mid1.setAttribute('width', '20')
mid1.setAttribute('height', '10')

const mid2 = document.createElement('rect')
mid2.setAttribute('x', '30')
mid2.setAttribute('y', '50')
mid2.setAttribute('width', '10')
mid2.setAttribute('height', '10')

const base = document.createElement('rect')
base.setAttribute('x', '0')
base.setAttribute('y', '60')
base.setAttribute('width', '40')
base.setAttribute('height', '10')

const bot = document.createElement('rect')
bot.setAttribute('x', '10')
bot.setAttribute('y', '70')
bot.setAttribute('width', '20')
bot.setAttribute('height', '10')


export default function(wizard, frame) {
  // step 1
  if(frame % 6 == 0) {
    // do nothing
  } else if(frame % 6 == 1) {
    top.setAttribute('fill', '#72ffff')
    mid1.setAttribute('fill', '#72ffff')
    mid2.setAttribute('fill', '#72ffff')
    base.setAttribute('fill', '#72ffff')
    bot.setAttribute('fill', '#72ffff')
    wizard.childNodes[0].appendChild(top.cloneNode(true))
    wizard.childNodes[0].appendChild(mid1.cloneNode(true))
    wizard.childNodes[0].appendChild(mid2.cloneNode(true))
    wizard.childNodes[0].appendChild(base.cloneNode(true))
    wizard.childNodes[0].appendChild(bot.cloneNode(true))
  } else if(frame % 6 == 2) {
    top.setAttribute('fill', '#a1ffff')
    mid1.setAttribute('fill', '#a1ffff')
    mid2.setAttribute('fill', '#a1ffff')
    base.setAttribute('fill', '#a1ffff')
    bot.setAttribute('fill', '#a1ffff')
    wizard.childNodes[0].appendChild(top.cloneNode(true))
    wizard.childNodes[0].appendChild(mid1.cloneNode(true))
    wizard.childNodes[0].appendChild(mid2.cloneNode(true))
    wizard.childNodes[0].appendChild(base.cloneNode(true))
    wizard.childNodes[0].appendChild(bot.cloneNode(true))
  } else if(frame % 6 == 3) {
    top.setAttribute('fill', '#d0ffff')
    mid1.setAttribute('fill', '#d0ffff')
    mid2.setAttribute('fill', '#d0ffff')
    base.setAttribute('fill', '#d0ffff')
    bot.setAttribute('fill', '#d0ffff')
    wizard.childNodes[0].appendChild(top.cloneNode(true))
    wizard.childNodes[0].appendChild(mid1.cloneNode(true))
    wizard.childNodes[0].appendChild(mid2.cloneNode(true))
    wizard.childNodes[0].appendChild(base.cloneNode(true))
    wizard.childNodes[0].appendChild(bot.cloneNode(true))
  } else if(frame % 6 == 4) {
    top.setAttribute('fill', '#a1ffff')
    mid1.setAttribute('fill', '#a1ffff')
    mid2.setAttribute('fill', '#a1ffff')
    base.setAttribute('fill', '#a1ffff')
    bot.setAttribute('fill', '#a1ffff')
    wizard.childNodes[0].appendChild(top.cloneNode(true))
    wizard.childNodes[0].appendChild(mid1.cloneNode(true))
    wizard.childNodes[0].appendChild(mid2.cloneNode(true))
    wizard.childNodes[0].appendChild(base.cloneNode(true))
    wizard.childNodes[0].appendChild(bot.cloneNode(true))
  } else if(frame % 6 == 5) {
    top.setAttribute('fill', '#72ffff')
    mid1.setAttribute('fill', '#72ffff')
    mid2.setAttribute('fill', '#72ffff')
    base.setAttribute('fill', '#72ffff')
    bot.setAttribute('fill', '#72ffff')
    wizard.childNodes[0].appendChild(top.cloneNode(true))
    wizard.childNodes[0].appendChild(mid1.cloneNode(true))
    wizard.childNodes[0].appendChild(mid2.cloneNode(true))
    wizard.childNodes[0].appendChild(base.cloneNode(true))
    wizard.childNodes[0].appendChild(bot.cloneNode(true))
  }
  return wizard
}
