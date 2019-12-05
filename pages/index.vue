<template>
  <div class="container">
    <div ref="chart"></div>
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
    this.notebookModule = runtime.module(notebook, (name) => {
      if (name === 'chart') {
        return new Inspector(this.$refs.chart)
      }
    })
  }
}
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */
</style>
