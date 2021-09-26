<template>
  <div class="map">
    <div class="row" v-for="row in mapRow" :key="row">
      <div v-for="col in mapCol" :key="col">
        <Box :type="mapArray[row - 1][col - 1]"></Box>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Box from './Box.vue'
import { mapRow, mapCol } from '../config'
import { initSelfGame } from '../game'
import { reactive } from '@vue/reactivity'

const mapArray = reactive([])

initSelfGame(mapArray)
</script>

<style>
.map {
  margin: 0 auto;
}
.row {
  display: flex;
}
</style>