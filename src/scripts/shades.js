const flash = document.createElement('rect')
flash.setAttribute('fill', '#ffffff')
flash.setAttribute('width', '10')
flash.setAttribute('height', '10')

export default function(wizard, frame) {
  // step 1
  if(frame % 6 == 0) {
    //do nothing
  } else if(frame % 6 == 1) {
    flash.setAttribute('x', '70')
    flash.setAttribute('y', '100')
    wizard.childNodes[0].appendChild(flash.cloneNode(true))
    flash.setAttribute('x', '110')
    flash.setAttribute('y', '100')
    wizard.childNodes[0].appendChild(flash.cloneNode(true))
  } else if(frame % 6 == 2) {
    flash.setAttribute('x', '80')
    flash.setAttribute('y', '100')
    wizard.childNodes[0].appendChild(flash.cloneNode(true))
    flash.setAttribute('x', '70')
    flash.setAttribute('y', '110')
    wizard.childNodes[0].appendChild(flash.cloneNode(true))
    flash.setAttribute('x', '120')
    flash.setAttribute('y', '100')
    wizard.childNodes[0].appendChild(flash.cloneNode(true))
    flash.setAttribute('x', '110')
    flash.setAttribute('y', '110')
    wizard.childNodes[0].appendChild(flash.cloneNode(true))
  } else if(frame % 6 == 3) {
    flash.setAttribute('x', '90')
    flash.setAttribute('y', '100')
    wizard.childNodes[0].appendChild(flash.cloneNode(true))
    flash.setAttribute('x', '80')
    flash.setAttribute('y', '110')
    wizard.childNodes[0].appendChild(flash.cloneNode(true))
    flash.setAttribute('x', '90')
    flash.setAttribute('y', '110')
    wizard.childNodes[0].appendChild(flash.cloneNode(true))
    flash.setAttribute('x', '130')
    flash.setAttribute('y', '100')
    wizard.childNodes[0].appendChild(flash.cloneNode(true))
    flash.setAttribute('x', '120')
    flash.setAttribute('y', '110')
    wizard.childNodes[0].appendChild(flash.cloneNode(true))
    flash.setAttribute('x', '130')
    flash.setAttribute('y', '110')
    wizard.childNodes[0].appendChild(flash.cloneNode(true))
  } else if(frame % 6 == 4) {
    flash.setAttribute('x', '90')
    flash.setAttribute('y', '110')
    wizard.childNodes[0].appendChild(flash.cloneNode(true))
    flash.setAttribute('x', '130')
    flash.setAttribute('y', '110')
    wizard.childNodes[0].appendChild(flash.cloneNode(true))
  } else if(frame % 6 == 5) {
    //do nothing
  }
  return wizard
}
