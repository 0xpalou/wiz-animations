<template>
  <div class="" :style="{ padding: '34px 50px' }">
    <!-- Get Wizard -->
    <div>
      <strong>Wizard:</strong>
      <input
        type="number"
        v-model="wizardId"
        :style="{ border: 'none', outline: 'none', padding: '0 3px' }"
        placeholder="Search by Wizard Id"
      />
    </div>
    <div class="">
      speed:
      <input type="range" v-model="speed" min="4" max="12" />
    </div>
    <div
      class=""
      :key="param"
      v-for="param in Object.keys(params).filter((param) => canParams[param])"
    >
      <input type="checkbox" v-model="params[param]" />
      {{ param }}
    </div>

    <button class="" @click="runAnimation">animate!</button>
    <div class="" v-if="wizardSVG">
      <img :src="wizardSVG" id="svg" /> <br />
    </div>
    <div :style="{ display: 'flex', gap: '12px', margin: '12px 0' }">
      <Render
        v-if="animation.length > 0"
        :frames="animation"
        :length="(1200 / 6) * speed"
      />
    </div>
    <!--
    <div class="" v-if="animation.length > 0">
      <div v-html="frame.innerHTML" :key="i" v-for="(frame, i) in animation">
      </div>
    </div>
  --></div>
</template>

<script>
import Web3 from "web3";
import abi from "@/assets/abi.json";
import Render from "@/pages/Render.vue";
import animate from "./scripts/animate.js";

const baseParams = {
  drool: false,
  bloodyDrool: false,
  rainbow: false,
  cig: false,
  greenSparkle: false,
  goldSparkle: false,
  shades: false,
  eyeTwiter: false,
  eyePatch: false,
  blueStaff: false,
  redStaff: false,
  orb: false,
  purpleOrb: false,
};

export default {
  name: "App",
  components: {
    Render,
  },
  data() {
    return {
      web3: null,
      contract: null,
      wizardId: "",
      speed: 6,
      wizard: null,
      wizardSVG: "",
      image: "",
      params: JSON.parse(JSON.stringify(baseParams)),
      canParams: JSON.parse(JSON.stringify(baseParams)),
      animation: [],
    };
  },
  created: function () {
    this.web3 = new Web3(
      "https://mainnet.infura.io/v3/8b8bb973b275454e8413fa733a2fa5b5"
    );
    this.contract = new this.web3.eth.Contract(
      abi,
      "0xC23b12EBA3af92dc3Ec94744c0c260caD0EeD0e5"
    );
  },
  mounted: function () {
    this.getWizard();
  },
  watch: {
    wizardId: function () {
      this.getWizard();
    },
  },
  methods: {
    getWizard: async function () {
      if (typeof this.wizardId == "number" && this.wizardId >= 0) {
        const response = await this.contract.methods
          .tokenURI(this.wizardId)
          .call();
        const result = JSON.parse(atob(response.substring(29)));
        this.wizard = result;
        this.wizardSVG = result.image;
        this.image = atob(result.image.substring(26));
        this.params = JSON.parse(JSON.stringify(baseParams));
        this.canParams = JSON.parse(JSON.stringify(baseParams));
        this.checkProperties();
      }
    },
    checkProperties: function () {
      const editor = document.createElement("div");
      editor.innerHTML = this.image;
      editor.childNodes[0].childNodes.forEach((node) => {
        if (
          node.attributes.fill.nodeValue == "#f75490" &&
          node.attributes.x.nodeValue == 90
        ) {
          this.canParams.rainbow = true;
          this.params.rainbow = true;
        }
        if (
          node.attributes.fill.nodeValue == "#eaeaea" &&
          (node.attributes.x.nodeValue == 150 ||
            node.attributes.x.nodeValue == 160)
        ) {
          this.canParams.cig = true;
          this.params.cig = true;
        }
        if (
          node.attributes.fill.nodeValue == "#000106" &&
          node.attributes.width.nodeValue == "90"
        ) {
          this.canParams.shades = true;
          this.params.shades = true;
        }
        if (
          node.attributes.fill.nodeValue == "#5fff76" &&
          (node.attributes.x.nodeValue > 120 ||
            node.attributes.y.nodeValue > 120)
        ) {
          this.canParams.greenSparkle = true;
          this.params.greenSparkle = true;
        }
        if (
          node.attributes.fill.nodeValue == "#ffc42e" &&
          (node.attributes.x.nodeValue > 120 ||
            node.attributes.y.nodeValue > 120)
        ) {
          this.canParams.goldSparkle = true;
          this.params.goldSparkle = true;
        }
        if (node.attributes.fill.nodeValue == "#0092f8") {
          this.canParams.drool = true;
          this.params.drool = true;
        }
        if (node.attributes.fill.nodeValue == "#b70005") {
          this.canParams.bloodyDrool = true;
          this.params.bloodyDrool = true;
        }
        if (node.attributes.fill.nodeValue == "#43ffff") {
          this.canParams.blueStaff = true;
          this.params.blueStaff = true;
        }
        if (node.attributes.fill.nodeValue == "#ff3c00") {
          this.canParams.redStaff = true;
          this.params.redStaff = true;
        }
        if (node.attributes.fill.nodeValue == "#27ffcb") {
          this.canParams.orb = true;
          this.params.orb = true;
        }
        if (
          (node.attributes.fill.nodeValue == "#ff5fef" ||
            node.attributes.fill.nodeValue == "#c218ed") &&
          node.attributes.x.nodeValue > 140
        ) {
          this.canParams.purpleOrb = true;
          this.params.purpleOrb = true;
        }
      });
    },
    runAnimation: async function () {
      this.animation = [];

      const editor = document.createElement("div");
      editor.innerHTML = this.image;
      // cleaning
      editor.childNodes[0].childNodes.forEach((node, i, arr) => {
        if (this.params.drool && node.attributes.fill.nodeValue == "#0092f8") {
          node.attributes.fill.nodeValue = arr[i - 1].attributes.fill.nodeValue;
        }
        if (
          this.params.greenSparkle &&
          node.attributes.fill.nodeValue == "#5fff76" &&
          (node.attributes.x.nodeValue > 120 ||
            node.attributes.y.nodeValue > 120)
        ) {
          node.attributes.fill.nodeValue = "rgba(0, 0, 0, 0)";
        }
        if (
          this.params.goldSparkle &&
          node.attributes.fill.nodeValue == "#ffc42e" &&
          (node.attributes.x.nodeValue > 120 ||
            node.attributes.y.nodeValue > 120)
        ) {
          node.attributes.fill.nodeValue = "rgba(0, 0, 0, 0)";
        }
        if (
          this.params.cig &&
          node.attributes.fill.nodeValue == "#eaeaea" &&
          (node.attributes.x.nodeValue == 150 ||
            node.attributes.x.nodeValue == 160)
        ) {
          node.attributes.fill.nodeValue = "rgba(0, 0, 0, 0)";
        }
        if (
          node.attributes.fill.nodeValue == "#27ffcb" ||
          (node.attributes.fill.nodeValue == "#ffffff" &&
            node.attributes.x.nodeValue == 160)
        ) {
          node.attributes.fill.nodeValue = "rgba(0, 0, 0, 0)";
        }
        if (
          (node.attributes.fill.nodeValue == "#ff5fef" ||
            node.attributes.fill.nodeValue == "#c218ed") &&
          node.attributes.x.nodeValue > 140
        ) {
          node.attributes.fill.nodeValue = "rgba(0, 0, 0, 0)";
        }
      });
      this.animation = await animate(editor, this.params, 1000 / this.speed);
    },
  },
};
</script>

<style>
rect:hover {
  z-index: 2;
  outline: 2px #262626;
}
</style>
