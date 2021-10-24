import { Game } from "./game";
import { Message } from "./message";

export class Rival {
  private _game;
  private _message;
  constructor(game: Game) {
    this._game = game;
    this._message = new Message();

    this._message.on("down", this.handleDown.bind(this));
    this._message.on("rotate", this.handleRotate.bind(this));
    this._message.on("left", this.handleLeft.bind(this));
    this._message.on("right", this.handleRight.bind(this));
  }

  handleDown() {
    this._game.moveDown();
  }

  handleRotate() {
    this._game.rotateShape();
  }

  handleLeft() {
    this._game.horizontalMove("left");
  }

  handleRight() {
    this._game.horizontalMove("right");
  }
}
