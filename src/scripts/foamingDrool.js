export default function(wizard) {
  const frames = []
  const drool = document.createElement('rect')
  drool.setAttribute('fill', '#0092f8')
  drool.setAttribute('width', '10')
  drool.setAttribute('height', '10')
  // step 1
  frames[0] = wizard.cloneNode(true);
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '140')
  frames[0].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '150')
  frames[0].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '170')
  frames[0].childNodes[0].appendChild(drool.cloneNode(true))

  //step 2
  frames[1] = wizard.cloneNode(true);
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '150')
  frames[1].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '160')
  frames[1].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '180')
  frames[1].childNodes[0].appendChild(drool.cloneNode(true))

  //step 3
  frames[2] = wizard.cloneNode(true);
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '160')
  frames[2].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '170')
  frames[2].childNodes[0].appendChild(drool.cloneNode(true))

  //step 4
  frames[3] = wizard.cloneNode(true);
  drool.setAttribute('x', '100')
  drool.setAttribute('y', '140')
  frames[3].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '170')
  frames[3].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '180')
  frames[3].childNodes[0].appendChild(drool.cloneNode(true))

  //step 5
  frames[4] = wizard.cloneNode(true);
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '140')
  frames[4].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '100')
  drool.setAttribute('y', '140')
  frames[4].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '180')
  frames[4].childNodes[0].appendChild(drool.cloneNode(true))

  //step 6
  frames[5] = wizard.cloneNode(true);
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '140')
  frames[5].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '100')
  drool.setAttribute('y', '140')
  frames[5].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '150')
  frames[5].childNodes[0].appendChild(drool.cloneNode(true))

  //step 7
  frames[6] = wizard.cloneNode(true);
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '140')
  frames[6].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '100')
  drool.setAttribute('y', '140')
  frames[6].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '150')
  frames[6].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '120')
  drool.setAttribute('y', '140')
  frames[6].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '100')
  drool.setAttribute('y', '150')
  frames[6].childNodes[0].appendChild(drool.cloneNode(true))

  //step 8
  frames[7] = wizard.cloneNode(true);
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '140')
  frames[7].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '100')
  drool.setAttribute('y', '140')
  frames[7].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '150')
  frames[7].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '120')
  drool.setAttribute('y', '140')
  frames[7].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '100')
  drool.setAttribute('y', '150')
  frames[7].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '160')
  frames[7].childNodes[0].appendChild(drool.cloneNode(true))

  //step 9
  frames[8] = wizard.cloneNode(true);
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '140')
  frames[8].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '100')
  drool.setAttribute('y', '140')
  frames[8].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '150')
  frames[8].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '120')
  drool.setAttribute('y', '140')
  frames[8].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '100')
  drool.setAttribute('y', '150')
  frames[8].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '170')
  frames[8].childNodes[0].appendChild(drool.cloneNode(true))

  //step 10
  frames[9] = wizard.cloneNode(true);
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '140')
  frames[9].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '100')
  drool.setAttribute('y', '140')
  frames[9].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '150')
  frames[9].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '160')
  frames[9].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '100')
  drool.setAttribute('y', '150')
  frames[9].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '180')
  frames[9].childNodes[0].appendChild(drool.cloneNode(true))

  //step 11
  frames[10] = wizard.cloneNode(true);
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '140')
  frames[10].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '100')
  drool.setAttribute('y', '140')
  frames[10].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '150')
  frames[10].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '160')
  frames[10].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '100')
  drool.setAttribute('y', '150')
  frames[10].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '170')
  frames[10].childNodes[0].appendChild(drool.cloneNode(true))

  //step 12
  frames[11] = wizard.cloneNode(true);
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '140')
  frames[11].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '100')
  drool.setAttribute('y', '140')
  frames[11].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '150')
  frames[11].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '170')
  frames[11].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '180')
  frames[11].childNodes[0].appendChild(drool.cloneNode(true))

  //step 13
  frames[12] = wizard.cloneNode(true);
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '140')
  frames[12].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '150')
  frames[12].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '160')
  frames[12].childNodes[0].appendChild(drool.cloneNode(true))
  drool.setAttribute('x', '110')
  drool.setAttribute('y', '180')
  frames[12].childNodes[0].appendChild(drool.cloneNode(true))

  return frames.map((frame) => frame.innerHTML)
}
