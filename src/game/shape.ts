import { allBoxArray, mapCol } from "../config";

export class Shape {
  readonly boxArray;
  public x: number;
  public y: number;
  constructor() {
    this.boxArray = this.randomBoxArray();
    this.x = this.randomX(this.boxArray[0].length);
    this.y = 1;
  }

  randomBoxArray() {
    return allBoxArray[Math.floor(Math.random() * allBoxArray.length)];
  }

  randomX(boxWidth: number) {
    return Math.floor(Math.random() * (mapCol - boxWidth));
  }
}
