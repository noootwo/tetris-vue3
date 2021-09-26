<template>
  <div class="box">{{type}}</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps(['type'])

const typeToColorMap: any = {
  0: 'gray',
  1: 'red',
}

const color = computed(() => typeToColorMap[props.type])
</script>

<style>
.box {
  width: 20px;
  height: 20px;
  background-color: v-bind(color);
  margin: 1px;
}
</style>
