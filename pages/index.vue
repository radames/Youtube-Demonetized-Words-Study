<template>
  <div class="container">
    <h1>Youtube Demonetized Words Similarity Study</h1>

    <div ref="chartRef" class="char"></div>
  </div>
</template>

<script>
import { Runtime, Inspector } from '@observablehq/runtime'
import notebook from '@radames/youtube-demonetized-words-similarity-study'

export default {
  components: {},
  data() {
    return {
      notebookModule: null
    }
  },
  mounted() {
    const runtime = new Runtime()
    const inspect = Inspector.into(this.$refs.chartRef)
    this.notebookModule = runtime.module(notebook, (name) => {
      return name === 'chart' && inspect()
    })
  }
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
}
.chart {
  height: auto;
  width: 100%;
}

.tooltip * {
  box-sizing: border-box;
}
.tooltip {
  position: absolute;
  overflow: scroll;
  padding: 10px;
  font: 15px sans-serif;
  background: rgb(255, 255, 255);
  pointer-events: none;
  display: flex;
  flex-grow: 2;
  z-index: 10000;
  color: #333333;
  border: 0.5px solid #333333;
  border-radius: 10px;
  box-shadow: 2px 2px 1px #333333;
}

.annotation-note-title,
text.title {
  font-weight: bold;
}
</style>
