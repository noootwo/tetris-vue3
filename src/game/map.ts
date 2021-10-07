import { Shape } from "./shape";

export class Map {
  private _mapArray: number[][] = [];
  private _mapRow: number = 0;
  private _mapCol: number = 0;
  constructor(mapArray: any[], mapRow: number, mapCol: number) {
    this._mapArray = mapArray;
    this._mapRow = mapRow;
    this._mapCol = mapCol;
  }

  get mapArray(): number[][] {
    return this._mapArray;
  }

  initMap(): void {
    for (let i = 0; i < this._mapRow; i++) {
      this._mapArray.push([]);
      for (let j = 0; j < this._mapCol; j++) {
        this._mapArray[i].push(0);
      }
    }
  }

  render(shape: Shape) {
    this.reset();
    for (let i = 0; i < shape.boxArray.length; i++) {
      for (let j = 0; j < shape.boxArray[0].length; j++) {
        const row = i + shape.y;
        const col = j + shape.x;
        if (shape.boxArray[i][j] && row >= 0) {
          this._mapArray[row][col] = 1;
        }
      }
    }
  }

  reset() {
    for (let i = 0; i < this._mapRow; i++) {
      for (let j = 0; j < this._mapCol; j++) {
        if (this._mapArray[i][j] > 0) this._mapArray[i][j] = 0;
      }
    }
  }

  saveHitBottomShape(shape: Shape) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < shape.boxArray.length; i++) {
        for (let j = 0; j < shape.boxArray[0].length; j++) {
          const row = i + shape.y;
          const col = j + shape.x;
          if (shape.boxArray[i][j]) {
            this._mapArray[row][col] = -1;
          }
        }
      }
      resolve(1);
    });
  }

  eliminateLine() {
    this._mapArray.forEach((line, index) => {
      const boo = line.every((item) => item === -1);
      if (boo) {
        this._mapArray.splice(index, 1);
        this._mapArray.unshift(new Array(this._mapCol).fill(0));
      }
    });
  }
}
