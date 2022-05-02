export default function(wizard) {
  const frames = []
  let i = 0;
  const drool = document.createElement('rect')
  drool.setAttribute('fill', '#0092f8')
  drool.setAttribute('width', '10')
  drool.setAttribute('height', '10')
  // step 1
  frames[i] = wizard.cloneNode(true);
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '140')
  frames[i].childNodes[0].appendChild(drool.cloneNode(true))
  i = i + 1

  //step 2
  frames[i] = wizard.cloneNode(true);
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '140')
  frames[i].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '150')
  frames[i].childNodes[0].appendChild(drool.cloneNode(true))
  i = i + 1

  //step 3
  frames[i] = wizard.cloneNode(true);
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '140')
  frames[i].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '150')
  frames[i].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '160')
  frames[i].childNodes[0].appendChild(drool.cloneNode(true))
  i = i + 1

  //step 4
  frames[i] = wizard.cloneNode(true);
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '140')
  frames[i].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '150')
  frames[i].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '170')
  frames[i].childNodes[0].appendChild(drool.cloneNode(true))
  i = i + 1

  //step 5
  frames[i] = wizard.cloneNode(true);
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '140')
  frames[i].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '150')
  frames[i].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '180')
  frames[i].childNodes[0].appendChild(drool.cloneNode(true))
  i = i + 1

  //step 6
  frames[i] = wizard.cloneNode(true);
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '140')
  frames[i].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '150')
  frames[i].childNodes[0].appendChild(drool.cloneNode(true))
  i = i + 1

  return frames.map((frame) => frame.innerHTML)
}
