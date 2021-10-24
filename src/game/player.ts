import { Game } from "./game";
import { Message } from "./message";

export class Player {
  private _game;
  private _message;
  constructor(game: Game) {
    window.addEventListener("keydown", (e) => this.moveBox(e));
    this._game = game;
    this._message = new Message();
  }

  moveBox(e: any) {
    switch (e.code) {
      case "ArrowDown":
        this._game.moveDown();
        this._message.emit("down");
        break;
      case "ArrowUp":
        this._game.rotateShape();
        this._message.emit("rotate");
        break;
      case "ArrowLeft":
        this._game.horizontalMove("left");
        this._message.emit("left");
        break;
      case "ArrowRight":
        this._game.horizontalMove("right");
        this._message.emit("right");
        break;
    }
  }
}
