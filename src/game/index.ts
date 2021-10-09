import { Ref } from "@vue/reactivity";

import { Game } from "./game";

export function initSelfGame(mapArray: any[], score: Ref<number>) {
  const selfGame = new Game(mapArray, score);
  selfGame.startGame();
}
