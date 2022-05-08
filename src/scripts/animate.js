import drool from "./drool.js"
import shades from "./shades.js"

export default function(wizard, params) {
  console.log(params)
  return new Promise((resolve) => {
    const frames = []
    for(let i = 0; i < 12; i = i + 1) {
      let frame = wizard.cloneNode(true);
      if(params.drool) frame = drool(frame, i)
      if(params.shades) frame = shades(frame, i)
      frames.push(frame)
    }
    resolve(frames)
  })
}
