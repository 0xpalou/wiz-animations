<template>
  <div class="" :style="{'padding': '34px 50px'}">
    <!-- Get Wizard -->
    <div>
      <strong>Wizard:</strong>
      <input
        type="number"
        v-model="wizardId"
        :style="{'border': 'none', 'outline': 'none', 'padding': '0 3px'}"
        placeholder="#"
      />
    </div>
    <div class="">
      speed:
      <input type="range" v-model="speed" min="4" max="12">
    </div>
    <button class="" @click="runAnimation">
      animate!
    </button>
    <div class="" v-if="wizardSVG">
      <img :src="wizardSVG" id="svg"> <br>
    </div>
    <div :style="{'display': 'flex', 'gap': '12px', 'margin': '12px 0'}" >
      <Render v-if="animation.length > 0" :frames="animation" :length="1200 / 6 * speed" />
    </div>
  </div>
</template>

<script>
import Web3 from "web3"
import abi from "@/assets/abi.json"
import Render from "@/pages/Render.vue"
import animate from "./scripts/animate.js"

export default {
  name: 'App',
  components: {
    Render,
  },
  data() {
    return {
      web3: null,
      contract: null,
      wizardId: 1,
      speed: 6,
      wizard: null,
      wizardSVG: "",
      image: "",
      animation: [],
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
      if(typeof(this.wizardId) == 'number' && this.wizardId >= 0) {
        const response = await this.contract.methods.tokenURI(this.wizardId).call()
        const result = JSON.parse(atob(response.substring(29)));
        this.wizard = result;
        this.wizardSVG = result.image
        this.image = atob(result.image.substring(26))
      }
    },
    runAnimation: async function() {
      this.animation = []

      const editor = document.createElement('div')
      let drool = false;
      let rainbow = false;
      let shades = false;
      let cig = false;
      let greenSparkle = false;
      let goldSparkle = false;
      editor.innerHTML = this.image
      editor.childNodes[0].childNodes.forEach((node, i, arr) => {
        if(node.attributes.fill.nodeValue == "#0092f8") {
          drool = true
          node.attributes.fill.nodeValue = arr[i - 1].attributes.fill.nodeValue
        }
        if(
          (node.attributes.fill.nodeValue == "#f75490" && node.attributes.x.nodeValue == 90)
        ) {
          rainbow = true
        }
        if(node.attributes.fill.nodeValue == "#000106" && node.attributes.width.nodeValue == "90") {
          shades = true;
        }
        if(node.attributes.fill.nodeValue == "#5fff76" && (node.attributes.x.nodeValue > 120 || node.attributes.y.nodeValue > 120)) {
          greenSparkle = true;
          node.attributes.fill.nodeValue = "rgba(0, 0, 0, 0)"
        }
        if(node.attributes.fill.nodeValue == "#ffc42e" && (node.attributes.x.nodeValue > 120 || node.attributes.y.nodeValue > 120)) {
          goldSparkle = true;
          node.attributes.fill.nodeValue = "rgba(0, 0, 0, 0)"
        }
        if(node.attributes.fill.nodeValue == "#eaeaea") {
          cig = true;
          node.attributes.fill.nodeValue = "rgba(0, 0, 0, 0)"
        }

      })
      this.animation = await animate(editor, {
        drool: drool,
        rainbow: rainbow,
        shades: shades,
        cig: cig,
        greenSparkle: greenSparkle,
        goldSparkle: goldSparkle
      })
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
