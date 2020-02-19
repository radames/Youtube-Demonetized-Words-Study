<template>
  <div class="mw8 center ph3">
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
      runtime: null,
    }
  },
  mounted() {
    this.runtime = new Runtime()
    const main = this.runtime.module(
      notebook,
      Inspector.into(this.$refs.chartRef)
    )
    main.redefine('width', this.$refs.chartRef.getBoundingClientRect().width)
  },
  unmounted() {
    this.runtime.dispose()
  },
}
</script>
<style lang="scss">
</style>
