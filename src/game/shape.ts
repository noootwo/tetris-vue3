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

  rotateShape() {
    const temp: number[][] = [];
    for (let i = 0; i < this.boxArray[0].length; i++) {
      temp.push([]);
      for (let j = this.boxArray.length - 1; j >= 0; j--) {
        temp[i].push(this.boxArray[j][i]);
      }
    }

    this.boxArray = temp;
  }
}
