<template>
  <div @click="back">
    back
  </div>
  <HelloWorld />
</template>

<script type="ts">
import { defineComponent } from 'vue'
import HelloWorld from '../../components/HelloWorld'

export default defineComponent({
  components: { HelloWorld },
  setup(){
    return {
      back(){
        window.location.href = "/index"
      }
    }
  }
})
</script>

<style>

</style>