import * as gameConfig from "../config";
import { Map } from "./map";
import { Shape } from "./shape";
import { Ticker } from "./ticker";

export class Game {
  private _map: Map;
  private _activeShape: any = null;
  private _ticker: Ticker;
  private _timer: any;
  private _speed: number = gameConfig.timeInterval;

  constructor(mapArray: any[]) {
    this._map = new Map(mapArray, gameConfig.mapRow, gameConfig.mapCol);
    this._ticker = new Ticker();
  }

  startGame() {
    this._map.initMap();
    this.initEventListener();
    this.createShape();
    this._ticker.addTicker(this.handleTicker.bind(this));
  }

  createShape() {
    this._activeShape = new Shape(gameConfig.rectBoxArray, 1, 3);
    // this.startMoveDown();
  }

  handleTicker() {
    this._map.render(this._activeShape);
  }

  startMoveDown() {
    this._timer = setInterval(() => {
      this._activeShape.y++;
    }, this._speed);
  }

  initEventListener() {
    window.addEventListener("keydown", (e) => {
      switch (e.code) {
        case "ArrowDown":
          this._activeShape.y++;
          break;
        case "ArrowUp":
          break;
        case "ArrowLeft":
          this._activeShape.x--;
          break;
        case "ArrowRight":
          this._activeShape.x++;
          break;
      }
    });
  }
}
