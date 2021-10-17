import { Ref } from "@vue/reactivity";
import { Game } from "./game";
import { Player } from "./player";

let selfGame: Game;
export function initSelfGame(mapArray: any[], score: Ref<number>) {
  selfGame = new Game(mapArray, score);
  const player = new Player(selfGame);
}

let rivalGame: Game;
export function initRivalGame(mapArray: any[], score: Ref<number>) {
  rivalGame = new Game(mapArray, score);
}

export function startSelfGame() {
  selfGame.startGame();
  rivalGame.startGame();
}
