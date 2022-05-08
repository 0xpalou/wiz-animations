const smoke = document.createElement('rect')
smoke.setAttribute('fill', '#eaeaea')
smoke.setAttribute('width', '10')
smoke.setAttribute('height', '10')

export default function(wizard, frame) {
  // step 1
  if(frame % 6 == 0) {
    smoke.setAttribute('fill', '#eaeaea')
    smoke.setAttribute('x', '150')
    smoke.setAttribute('y', '120')
    wizard.childNodes[0].appendChild(smoke.cloneNode(true))
    smoke.setAttribute('x', '160')
    smoke.setAttribute('y', '100')
    wizard.childNodes[0].appendChild(smoke.cloneNode(true))
  } else if(frame % 6 == 1) {
    smoke.setAttribute('x', '150')
    smoke.setAttribute('y', '120')
    wizard.childNodes[0].appendChild(smoke.cloneNode(true))
    smoke.setAttribute('x', '160')
    smoke.setAttribute('y', '110')
    wizard.childNodes[0].appendChild(smoke.cloneNode(true))
    smoke.setAttribute('x', '160')
    smoke.setAttribute('y', '90')
    wizard.childNodes[0].appendChild(smoke.cloneNode(true))
  } else if(frame % 6 == 2) {
    smoke.setAttribute('fill', 'rgba(234, 234, 234, .5)')
    smoke.setAttribute('x', '150')
    smoke.setAttribute('y', '120')
    wizard.childNodes[0].appendChild(smoke.cloneNode(true))
    smoke.setAttribute('x', '160')
    smoke.setAttribute('y', '110')
    wizard.childNodes[0].appendChild(smoke.cloneNode(true))
    smoke.setAttribute('x', '160')
    smoke.setAttribute('y', '100')
    wizard.childNodes[0].appendChild(smoke.cloneNode(true))
    smoke.setAttribute('x', '160')
    smoke.setAttribute('y', '80')
    wizard.childNodes[0].appendChild(smoke.cloneNode(true))
  } else if(frame % 6 == 3) {
    smoke.setAttribute('fill', 'rgba(234, 234, 234, .25)')
    smoke.setAttribute('x', '160')
    smoke.setAttribute('y', '100')
    wizard.childNodes[0].appendChild(smoke.cloneNode(true))
    smoke.setAttribute('x', '160')
    smoke.setAttribute('y', '70')
    wizard.childNodes[0].appendChild(smoke.cloneNode(true))
  } else if(frame % 6 == 4) {
    // nothing
  } else if(frame % 6 == 5) {
    //nothing
  }
  return wizard
}
