<template>
  <div class="map">
    <h2>{{player}}分数：{{score}}</h2>
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
import { initSelfGame, initRivalGame } from '../game'
import { reactive, ref } from '@vue/reactivity'

const props = defineProps(['type'])

const player = ref('')
const score = ref(0)

const mapArray = reactive([])

if (props.type === 'self') {
  initSelfGame(mapArray, score)
  player.value = '我的'
} else if (props.type === 'rival') {
  initRivalGame(mapArray, score)
  player.value = '对手'
}
</script>

<style>
.map {
  margin: 0 auto;
}
.row {
  display: flex;
}
</style>