const drool = document.createElement('rect')
drool.setAttribute('fill', '#0092f8')
drool.setAttribute('width', '10')
drool.setAttribute('height', '10')

export default function(wizard, frame) {
  // step 1
  if(frame % 6 == 0) {
    drool.setAttribute('x', '110')
    drool.setAttribute('y', '140')
    wizard.childNodes[0].appendChild(drool.cloneNode(true))
  } else if(frame % 6 == 1) {
    drool.setAttribute('x', '110')
    drool.setAttribute('y', '140')
    wizard.childNodes[0].appendChild(drool.cloneNode(true))
    drool.setAttribute('x', '100')
    drool.setAttribute('y', '140')
    wizard.childNodes[0].appendChild(drool.cloneNode(true))
    drool.setAttribute('x', '110')
    drool.setAttribute('y', '150')
    wizard.childNodes[0].appendChild(drool.cloneNode(true))
  } else if(frame % 6 == 2) {
    drool.setAttribute('x', '110')
    drool.setAttribute('y', '140')
    wizard.childNodes[0].appendChild(drool.cloneNode(true))
    drool.setAttribute('x', '100')
    drool.setAttribute('y', '140')
    wizard.childNodes[0].appendChild(drool.cloneNode(true))
    drool.setAttribute('x', '110')
    drool.setAttribute('y', '150')
    wizard.childNodes[0].appendChild(drool.cloneNode(true))
    drool.setAttribute('x', '110')
    drool.setAttribute('y', '160')
    wizard.childNodes[0].appendChild(drool.cloneNode(true))
  } else if(frame % 6 == 3) {
    drool.setAttribute('x', '110')
    drool.setAttribute('y', '140')
    wizard.childNodes[0].appendChild(drool.cloneNode(true))
    drool.setAttribute('x', '100')
    drool.setAttribute('y', '140')
    wizard.childNodes[0].appendChild(drool.cloneNode(true))
    drool.setAttribute('x', '110')
    drool.setAttribute('y', '150')
    wizard.childNodes[0].appendChild(drool.cloneNode(true))
    drool.setAttribute('x', '110')
    drool.setAttribute('y', '170')
    wizard.childNodes[0].appendChild(drool.cloneNode(true))
  } else if(frame % 6 == 4) {
    drool.setAttribute('x', '110')
    drool.setAttribute('y', '140')
    wizard.childNodes[0].appendChild(drool.cloneNode(true))
    drool.setAttribute('x', '110')
    drool.setAttribute('y', '150')
    wizard.childNodes[0].appendChild(drool.cloneNode(true))
    drool.setAttribute('x', '110')
    drool.setAttribute('y', '180')
    wizard.childNodes[0].appendChild(drool.cloneNode(true))
  } else if(frame % 6 == 5) {
    drool.setAttribute('x', '110')
    drool.setAttribute('y', '140')
    wizard.childNodes[0].appendChild(drool.cloneNode(true))
  }
  return wizard
}
