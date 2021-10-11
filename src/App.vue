<script setup lang="ts">
import Game from './components/Game.vue'
import { startSelfGame } from './game'

function startGame() {
  startSelfGame()
}
</script>

<template>
  <Game></Game>
  <button @click="startGame">start game</button>
</template>

<style>
</style>
