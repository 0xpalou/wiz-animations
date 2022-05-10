const top = document.createElement('rect')
top.setAttribute('fill', '#FF5FEF')
top.setAttribute('x', '160')
top.setAttribute('y', '20')
top.setAttribute('width', '10')
top.setAttribute('height', '10')

const mid1 = document.createElement('rect')
mid1.setAttribute('fill', '#C218ED')
mid1.setAttribute('x', '150')
mid1.setAttribute('y', '30')
mid1.setAttribute('width', '10')
mid1.setAttribute('height', '10')

const mid2 = document.createElement('rect')
mid2.setAttribute('fill', '#FF5FEF')
mid2.setAttribute('x', '160')
mid2.setAttribute('y', '30')
mid2.setAttribute('width', '20')
mid2.setAttribute('height', '10')

const base = document.createElement('rect')
base.setAttribute('fill', '#C218ED')
base.setAttribute('x', '150')
base.setAttribute('y', '40')
base.setAttribute('width', '30')
base.setAttribute('height', '10')

const bot = document.createElement('rect')
bot.setAttribute('fill', '#C218ED')
bot.setAttribute('x', '160')
bot.setAttribute('y', '50')
bot.setAttribute('width', '10')
bot.setAttribute('height', '10')

export default function(wizard, frame) {
  // step 1
  if(frame % 12 == 0 || frame % 12 == 11) {
    wizard.childNodes[0].appendChild(top.cloneNode(true))
    wizard.childNodes[0].appendChild(mid1.cloneNode(true))
    wizard.childNodes[0].appendChild(mid2.cloneNode(true))
    wizard.childNodes[0].appendChild(base.cloneNode(true))
    wizard.childNodes[0].appendChild(bot.cloneNode(true))
  } else if(frame % 12 == 1) {
    top.setAttribute('x', '140')
    top.setAttribute('y', '20')
    wizard.childNodes[0].appendChild(top.cloneNode(true))

    mid1.setAttribute('x', '130')
    mid1.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid1.cloneNode(true))

    mid2.setAttribute('x', '140')
    mid2.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid2.cloneNode(true))

    base.setAttribute('x', '130')
    base.setAttribute('y', '40')
    wizard.childNodes[0].appendChild(base.cloneNode(true))

    bot.setAttribute('x', '140')
    bot.setAttribute('y', '50')
    wizard.childNodes[0].appendChild(bot.cloneNode(true))
  } else if(frame % 12 == 2) {
    top.setAttribute('x', '110')
    top.setAttribute('y', '20')
    wizard.childNodes[0].appendChild(top.cloneNode(true))

    mid2.setAttribute('x', '110')
    mid2.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid2.cloneNode(true))

    base.setAttribute('x', '110')
    base.setAttribute('y', '40')
    base.setAttribute('width', '20')
    wizard.childNodes[0].appendChild(base.cloneNode(true))
    base.setAttribute('width', '30')
  } else if(frame % 12 == 3) {
    const peek = document.createElement('rect')
    peek.setAttribute('fill', '#C218ED')
    peek.setAttribute('x', '60')
    peek.setAttribute('y', '40')
    peek.setAttribute('width', 10)
    peek.setAttribute('height', 20)
    wizard.childNodes[0].appendChild(peek.cloneNode(true))
  } else if(frame % 12 == 4) {
    top.setAttribute('x', '20')
    top.setAttribute('y', '20')
    wizard.childNodes[0].appendChild(top.cloneNode(true))

    mid1.setAttribute('x', '10')
    mid1.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid1.cloneNode(true))

    mid2.setAttribute('x', '20')
    mid2.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid2.cloneNode(true))

    base.setAttribute('x', '10')
    base.setAttribute('y', '40')
    wizard.childNodes[0].appendChild(base.cloneNode(true))

    bot.setAttribute('x', '20')
    bot.setAttribute('y', '50')
    wizard.childNodes[0].appendChild(bot.cloneNode(true))
  } else if(frame % 12 == 5 || frame % 12 == 6) {
    top.setAttribute('x', '20')
    top.setAttribute('y', '20')
    wizard.childNodes[0].appendChild(top.cloneNode(true))

    mid1.setAttribute('x', '10')
    mid1.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid1.cloneNode(true))

    mid2.setAttribute('x', '20')
    mid2.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid2.cloneNode(true))

    base.setAttribute('x', '10')
    base.setAttribute('y', '40')
    wizard.childNodes[0].appendChild(base.cloneNode(true))

    bot.setAttribute('x', '20')
    bot.setAttribute('y', '50')
    wizard.childNodes[0].appendChild(bot.cloneNode(true))
  } else if(frame % 12 == 7) {
    top.setAttribute('x', '40')
    top.setAttribute('y', '20')
    wizard.childNodes[0].appendChild(top.cloneNode(true))

    mid1.setAttribute('x', '30')
    mid1.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid1.cloneNode(true))

    mid2.setAttribute('x', '40')
    mid2.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid2.cloneNode(true))

    base.setAttribute('x', '30')
    base.setAttribute('y', '40')
    wizard.childNodes[0].appendChild(base.cloneNode(true))

    bot.setAttribute('x', '40')
    bot.setAttribute('y', '50')
    wizard.childNodes[0].appendChild(bot.cloneNode(true))
  } else if(frame % 12 == 8) {
    top.setAttribute('x', '60')
    top.setAttribute('y', '20')
    wizard.childNodes[0].appendChild(top.cloneNode(true))

    mid1.setAttribute('x', '50')
    mid1.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid1.cloneNode(true))

    mid2.setAttribute('x', '60')
    mid2.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid2.cloneNode(true))

    base.setAttribute('x', '50')
    base.setAttribute('y', '40')
    wizard.childNodes[0].appendChild(base.cloneNode(true))

    bot.setAttribute('x', '60')
    bot.setAttribute('y', '50')
    wizard.childNodes[0].appendChild(bot.cloneNode(true))
  } else if(frame % 12 == 9) {
    top.setAttribute('x', '120')
    top.setAttribute('y', '20')
    wizard.childNodes[0].appendChild(top.cloneNode(true))

    mid1.setAttribute('x', '110')
    mid1.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid1.cloneNode(true))

    mid2.setAttribute('x', '120')
    mid2.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid2.cloneNode(true))

    base.setAttribute('x', '110')
    base.setAttribute('y', '40')
    wizard.childNodes[0].appendChild(base.cloneNode(true))

    bot.setAttribute('x', '120')
    bot.setAttribute('y', '50')
    wizard.childNodes[0].appendChild(bot.cloneNode(true))
  } else if(frame % 12 == 10) {
    top.setAttribute('x', '160')
    top.setAttribute('y', '20')
    wizard.childNodes[0].appendChild(top.cloneNode(true))

    mid1.setAttribute('x', '150')
    mid1.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid1.cloneNode(true))

    mid2.setAttribute('x', '160')
    mid2.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid2.cloneNode(true))

    base.setAttribute('x', '150')
    base.setAttribute('y', '40')
    wizard.childNodes[0].appendChild(base.cloneNode(true))

    bot.setAttribute('x', '160')
    bot.setAttribute('y', '50')
    wizard.childNodes[0].appendChild(bot.cloneNode(true))
  }
  return wizard
}
