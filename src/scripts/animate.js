import GIF from "./gif.js";

import drool from "./drool.js";
import bloodyDrool from "./bloodyDrool.js";
import rainbow from "./rainbow.js";
import shades from "./shades.js";
import cig from "./cig.js";
import greenSparkle from "./greenSparkle.js";
import goldSparkle from "./goldSparkle.js";
import blueStaff from "./blueStaff.js";
import redStaff from "./redStaff.js";
import orb from "./orb.js";
import purpleOrb from "./purpleOrb.js";

export default function (wizard, params, speed) {
  return new Promise((resolve) => {
    const frames = [];
    for (let i = 0; i < 12; i = i + 1) {
      let frame = wizard.cloneNode(true);
      if (params.drool) frame = drool(frame, i);
      if (params.bloodyDrool) frame = bloodyDrool(frame, i);
      if (params.rainbow) frame = rainbow(frame, i);
      if (params.shades) frame = shades(frame, i);
      if (params.cig) frame = cig(frame, i);
      if (params.greenSparkle) frame = greenSparkle(frame, i);
      if (params.goldSparkle) frame = goldSparkle(frame, i);
      if (params.blueStaff) frame = blueStaff(frame, i);
      if (params.redStaff) frame = redStaff(frame, i);
      if (params.orb) frame = orb(frame, i);
      if (params.purpleOrb) frame = purpleOrb(frame, i);
      frames.push(frame);
    }
    const gif = new GIF({
      workers: 2,
      quality: 10,
      width: 190,
      height: 190,
    });
    frames.forEach((frame) => {
      const blob = new Blob([frame.innerHTML], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      console.log(url);
      const element = document.createElement("img");
      element.src = url;
      console.log(element);
      gif.addFrame(element, { delay: speed });
    });

    gif.on("finished", function (blob) {
      window.open(URL.createObjectURL(blob));
    });
    gif.render();
    //resolve(frames)
    resolve([]);
  });
}
