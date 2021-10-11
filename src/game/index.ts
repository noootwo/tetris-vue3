import { Ref } from "@vue/reactivity";
import { Game } from "./game";

let selfGame: Game;
export function initSelfGame(mapArray: any[], score: Ref<number>) {
  selfGame = new Game(mapArray, score);
}

export function startSelfGame() {
  selfGame.startGame();
}
