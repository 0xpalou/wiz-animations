<template>
  <div class="" :style="{'padding': '34px 50px'}">
    <h2>Hi 👋</h2>

    <!-- Get Wizard -->
    <div >
      <strong>Wizard:</strong>
      <input
        type="number"
        v-model="wizardId"
        :style="{'border': 'none', 'outline': 'none', 'padding': '0 3px'}"
        placeholder="#"
      />
    </div>
    <div class="" v-if="wizard">
      <img :src="wizardSVG" id="svg"> <br>
      <button type="button" @click="drool">!drool</button>
    </div>
    <div class="">
      <h2>Drool: </h2>
      <div class="" :style="{'display': 'flex'}">
        <div
          class=""
          v-html="frames[frame]"
        > </div>
      </div>
    </div>
  </div>
</template>

<script>
import Web3 from "web3"
import abi from "@/assets/abi.json"
import droolAnimation from "@/scripts/drool.js"

export default {
  name: 'App',
  data() {
    return {
      web3: null,
      contract: null,
      wizardId: 0,
      wizard: null,
      wizardSVG: "",
      image: "",
      output: "",
      frames: [],
      frame: 0,
      interval: null,
    }
  },
  created: function() {
    this.web3 = new Web3("https://mainnet.infura.io/v3/8b8bb973b275454e8413fa733a2fa5b5")
    this.contract = new this.web3.eth.Contract(abi, "0xC23b12EBA3af92dc3Ec94744c0c260caD0EeD0e5")
  },
  mounted: function() {
    this.getWizard()
  },
  watch: {
    wizardId: function() {
      this.getWizard()
    },
  },
  methods: {
    getWizard: async function() {
      if(this.wizardId >= 0) {
        const response = await this.contract.methods.tokenURI(this.wizardId).call()
        const result = JSON.parse(atob(response.substring(29)));
        this.wizard = result;
        this.wizardSVG = result.image
        this.image = atob(result.image.substring(26))
        this.output = this.image
      }
    },
    drool: async function() {
      /* Remove Current Drool */
      const editor = document.createElement('div')
      let droolPixel;
      editor.innerHTML = this.image
      editor.childNodes[0].childNodes.forEach((node, i, arr) => {
        if(node.attributes.fill.nodeValue == "#0092f8") {
          droolPixel = node.cloneNode(true)
          node.attributes.fill.nodeValue = arr[i - 1].attributes.fill.nodeValue
        }
      })
      this.output = editor.innerHTML;
      this.frames = droolAnimation(editor, droolPixel)
      if(this.interval != null) clearInterval(this.interval)
      this.interval = setInterval(() => {
        this.frame = (this.frame + 1) % this.frames.length
      }, 120)
    }
  }
}
</script>

<style>

rect:hover {
  z-index: 2;
  outline: 2px #262626;
}

</style>
