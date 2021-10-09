import { Map } from "./map";
import { allBoxArray, mapCol } from "../config";

export class Shape {
  public boxArray: number[][];
  public x: number;
  public y: number;
  constructor() {
    this.boxArray = this.randomBoxArray();
    this.x = this.randomX(this.boxArray[0].length);
    this.y = -this.boxArray.length;
  }

  randomBoxArray() {
    return allBoxArray[Math.floor(Math.random() * allBoxArray.length)];
  }

  randomX(boxWidth: number) {
    return Math.floor(Math.random() * (mapCol - boxWidth));
  }

  rotateShape(map: Map) {
    const temp: number[][] = [];
    for (let i = 0; i < this.boxArray[0].length; i++) {
      temp.push([]);
      for (let j = this.boxArray.length - 1; j >= 0; j--) {
        const col = temp.length - 1 + this.x;
        const row = temp[temp.length - 1].length + this.y;

        const coverColBoundary = col < 0 || col >= map.mapCol;
        const coverBottomBoundary = row >= map.mapRow;
        const coverBox =
          row > 0 && !coverBottomBoundary && map.mapArray[row][col] === -1;

        if (coverBottomBoundary || coverColBoundary || coverBox) return;
        temp[i].push(this.boxArray[j][i]);
      }
    }

    this.boxArray = temp;
  }
}
