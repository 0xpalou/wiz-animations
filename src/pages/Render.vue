<template lang="html">
  <a :href="url" v-if="url" ref="url" download="drooler.webm">
    <video :src="url" alt="" loop autoplay width="190" height="190" />
  </a>
</template>

<script>

export default {
  name: "Render",
  props: {
    frames: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      url: ""
    }
  },
  mounted: async function() {
    const URL = window.URL || window.webkitURL || window;

    const images = await Promise.all(this.frames.map((frame) => {
      return new Promise((resolve) => {
        const blob = new Blob([frame], {type:'image/svg+xml;charset=utf-8'});
        const url = URL.createObjectURL(blob);
        const image = new Image();
        image.onload = () => {
          resolve(image)
        }
        image.src = url;
      })
    }))
    const canvas = document.createElement('canvas')
    canvas.width = 1080;
    canvas.height = 1080;
    const context = canvas.getContext('2d')
    const stream = canvas.captureStream(); // grab our canvas MediaStream
    const rec = new MediaRecorder(stream); // init the recorder
    const startRecording = () => {
      const chunks = []; // here we will store our recorded media chunks (Blobs)
      // every time the recorder has new data, we will store it in our array
      rec.ondataavailable = e => {
        chunks.push(e.data);
      }
      // only when the recorder stops, we construct a complete Blob from all the chunks
      rec.onstop = () => {
        this.exportVid(new Blob(chunks, {type: 'video/webm'}));
      }

      rec.start();
    }

    let i = 0
    const interval = setInterval(() => {
      if(i >= images.length - 1) {
        rec.stop();
        clearInterval(interval)
      }
      context.drawImage(images[i % images.length], 0, 0, 1080, 1080)
      if(i == 0) startRecording()
      i = i + 1
    }, 300)
  },
  methods: {
    exportVid: function(blob) {
      this.url = URL.createObjectURL(blob);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
