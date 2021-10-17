import { Game } from "./game";

export class Player {
  private _game;
  constructor(game: Game) {
    window.addEventListener("keydown", (e) => this.moveBox(e));
    this._game = game;
  }

  moveBox(e: any) {
    switch (e.code) {
      case "ArrowDown":
        this._game.moveDown();
        break;
      case "ArrowUp":
        this._game.rotateShape();
        break;
      case "ArrowLeft":
        this._game.horizontalMove("left");
        break;
      case "ArrowRight":
        this._game.horizontalMove("right");
        break;
    }
  }
}
