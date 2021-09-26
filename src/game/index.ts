import { Game } from "./game";

export function initSelfGame(mapArray: any[]) {
  const selfGame = new Game(mapArray);
  selfGame.startGame();
}
