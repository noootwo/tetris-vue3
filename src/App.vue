<script setup lang="ts">
import Game from './components/Game.vue'
import { startSelfGame } from './game'

function startGame() {
  startSelfGame()
}
</script>

<template>
  <div class="body">
    <div class="gameWrapper">
      <Game type="self"></Game>
      <button @click="startGame">start game</button>
    </div>
    <div class="gameWrapper">
      <Game type="rival"></Game>
    </div>
  </div>
</template>

<style>
.body {
  display: flex;
}
.gameWrapper {
  margin-right: 20px;
}
</style>
