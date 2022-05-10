const top = document.createElement('rect')
top.setAttribute('fill', '#27FFCB')
top.setAttribute('x', '150')
top.setAttribute('y', '20')
top.setAttribute('width', '20')
top.setAttribute('height', '10')

const mid1 = document.createElement('rect')
mid1.setAttribute('fill', '#27FFCB')
mid1.setAttribute('x', '140')
mid1.setAttribute('y', '30')
mid1.setAttribute('width', '20')
mid1.setAttribute('height', '10')

const shine = document.createElement('rect')
shine.setAttribute('fill', '#ffffff')
shine.setAttribute('x', '160')
shine.setAttribute('y', '30')
shine.setAttribute('width', '10')
shine.setAttribute('height', '10')

const mid2 = document.createElement('rect')
mid2.setAttribute('fill', '#27FFCB')
mid2.setAttribute('x', '170')
mid2.setAttribute('y', '30')
mid2.setAttribute('width', '10')
mid2.setAttribute('height', '10')

const base = document.createElement('rect')
base.setAttribute('fill', '#27FFCB')
base.setAttribute('x', '140')
base.setAttribute('y', '40')
base.setAttribute('width', '40')
base.setAttribute('height', '10')

const bot = document.createElement('rect')
bot.setAttribute('fill', '#27FFCB')
bot.setAttribute('x', '150')
bot.setAttribute('y', '50')
bot.setAttribute('width', '20')
bot.setAttribute('height', '10')

export default function(wizard, frame) {
  // step 1
  if(frame % 12 == 0 || frame % 12 == 11) {
    wizard.childNodes[0].appendChild(top.cloneNode(true))
    wizard.childNodes[0].appendChild(mid1.cloneNode(true))
    wizard.childNodes[0].appendChild(shine.cloneNode(true))
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

    shine.setAttribute('x', '150')
    shine.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(shine.cloneNode(true))

    mid2.setAttribute('x', '160')
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

    mid1.setAttribute('x', '110')
    mid1.setAttribute('y', '30')
    mid1.setAttribute('width', '10')
    wizard.childNodes[0].appendChild(mid1.cloneNode(true))
    mid1.setAttribute('width', '20')

    shine.setAttribute('x', '120')
    shine.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(shine.cloneNode(true))

    mid2.setAttribute('x', '130')
    mid2.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid2.cloneNode(true))

    base.setAttribute('x', '110')
    base.setAttribute('y', '40')
    base.setAttribute('width', '30')
    wizard.childNodes[0].appendChild(base.cloneNode(true))
    base.setAttribute('width', '40')

    bot.setAttribute('x', '120')
    bot.setAttribute('y', '50')
    bot.setAttribute('width', '10')
    wizard.childNodes[0].appendChild(bot.cloneNode(true))
    bot.setAttribute('width', '20')
  } else if(frame % 12 == 3) {
    const peek = document.createElement('rect')
    peek.setAttribute('fill', '#27FFCB')
    peek.setAttribute('x', '60')
    peek.setAttribute('y', '40')
    peek.setAttribute('width', 10)
    peek.setAttribute('height', 20)
    wizard.childNodes[0].appendChild(peek.cloneNode(true))
  } else if(frame % 12 == 4) {
    top.setAttribute('x', '30')
    top.setAttribute('y', '20')
    wizard.childNodes[0].appendChild(top.cloneNode(true))

    mid1.setAttribute('x', '20')
    mid1.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid1.cloneNode(true))

    shine.setAttribute('x', '40')
    shine.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(shine.cloneNode(true))

    mid2.setAttribute('x', '50')
    mid2.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid2.cloneNode(true))

    base.setAttribute('x', '20')
    base.setAttribute('y', '40')
    wizard.childNodes[0].appendChild(base.cloneNode(true))

    bot.setAttribute('x', '30')
    bot.setAttribute('y', '50')
    wizard.childNodes[0].appendChild(bot.cloneNode(true))
  } else if(frame % 12 == 5 || frame % 12 == 6) {
    top.setAttribute('x', '30')
    top.setAttribute('y', '20')
    wizard.childNodes[0].appendChild(top.cloneNode(true))

    mid1.setAttribute('x', '20')
    mid1.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid1.cloneNode(true))

    shine.setAttribute('x', '40')
    shine.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(shine.cloneNode(true))

    mid2.setAttribute('x', '50')
    mid2.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid2.cloneNode(true))

    base.setAttribute('x', '20')
    base.setAttribute('y', '40')
    wizard.childNodes[0].appendChild(base.cloneNode(true))

    bot.setAttribute('x', '30')
    bot.setAttribute('y', '50')
    wizard.childNodes[0].appendChild(bot.cloneNode(true))
  } else if(frame % 12 == 7) {
    top.setAttribute('x', '40')
    top.setAttribute('y', '20')
    wizard.childNodes[0].appendChild(top.cloneNode(true))

    mid1.setAttribute('x', '30')
    mid1.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid1.cloneNode(true))

    shine.setAttribute('x', '50')
    shine.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(shine.cloneNode(true))

    mid2.setAttribute('x', '60')
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

    shine.setAttribute('x', '70')
    shine.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(shine.cloneNode(true))

    mid2.setAttribute('x', '80')
    mid2.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid2.cloneNode(true))

    base.setAttribute('x', '50')
    base.setAttribute('y', '40')
    wizard.childNodes[0].appendChild(base.cloneNode(true))

    bot.setAttribute('x', '60')
    bot.setAttribute('y', '50')
    wizard.childNodes[0].appendChild(bot.cloneNode(true))
  } else if(frame % 12 == 9) {
    top.setAttribute('x', '110')
    top.setAttribute('y', '20')
    wizard.childNodes[0].appendChild(top.cloneNode(true))

    mid1.setAttribute('x', '100')
    mid1.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid1.cloneNode(true))

    shine.setAttribute('x', '120')
    shine.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(shine.cloneNode(true))

    mid2.setAttribute('x', '130')
    mid2.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid2.cloneNode(true))

    base.setAttribute('x', '100')
    base.setAttribute('y', '40')
    wizard.childNodes[0].appendChild(base.cloneNode(true))

    bot.setAttribute('x', '110')
    bot.setAttribute('y', '50')
    wizard.childNodes[0].appendChild(bot.cloneNode(true))
  } else if(frame % 12 == 10) {
    top.setAttribute('x', '130')
    top.setAttribute('y', '20')
    wizard.childNodes[0].appendChild(top.cloneNode(true))

    mid1.setAttribute('x', '120')
    mid1.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid1.cloneNode(true))

    shine.setAttribute('x', '140')
    shine.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(shine.cloneNode(true))

    mid2.setAttribute('x', '150')
    mid2.setAttribute('y', '30')
    wizard.childNodes[0].appendChild(mid2.cloneNode(true))

    base.setAttribute('x', '120')
    base.setAttribute('y', '40')
    wizard.childNodes[0].appendChild(base.cloneNode(true))

    bot.setAttribute('x', '130')
    bot.setAttribute('y', '50')
    wizard.childNodes[0].appendChild(bot.cloneNode(true))
  }
  return wizard
}
