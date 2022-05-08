const red = document.createElement('rect')
red.setAttribute('fill', '#f75490')
red.setAttribute('width', '10')
red.setAttribute('height', '60')
const yellow = document.createElement('rect')
yellow.setAttribute('fill', '#ffe280')
yellow.setAttribute('width', '10')
yellow.setAttribute('height', '60')
const green = document.createElement('rect')
green.setAttribute('fill', '#84ffc3')
green.setAttribute('width', '10')
green.setAttribute('height', '60')

export default function(wizard, frame) {
  // step 1
  if(frame % 3 == 0) {
    red.setAttribute('x', '90')
    red.setAttribute('y', '130')
    wizard.childNodes[0].appendChild(red.cloneNode(true))
    yellow.setAttribute('x', '100')
    yellow.setAttribute('y', '130')
    wizard.childNodes[0].appendChild(yellow.cloneNode(true))
    green.setAttribute('x', '110')
    green.setAttribute('y', '130')
    wizard.childNodes[0].appendChild(green.cloneNode(true))
  } else if(frame % 3 == 1) {
    red.setAttribute('x', '100')
    red.setAttribute('y', '130')
    wizard.childNodes[0].appendChild(red.cloneNode(true))
    yellow.setAttribute('x', '110')
    yellow.setAttribute('y', '130')
    wizard.childNodes[0].appendChild(yellow.cloneNode(true))
    green.setAttribute('x', '90')
    green.setAttribute('y', '130')
    wizard.childNodes[0].appendChild(green.cloneNode(true))
  } else if(frame % 3 == 2) {
    red.setAttribute('x', '110')
    red.setAttribute('y', '130')
    wizard.childNodes[0].appendChild(red.cloneNode(true))
    yellow.setAttribute('x', '90')
    yellow.setAttribute('y', '130')
    wizard.childNodes[0].appendChild(yellow.cloneNode(true))
    green.setAttribute('x', '100')
    green.setAttribute('y', '130')
    wizard.childNodes[0].appendChild(green.cloneNode(true))
  }
  return wizard
}
