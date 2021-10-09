import { mapCol } from "../config";
import {
  getBottomPoints,
  getHorizontalPoints,
  getHorizontalIndex,
} from "./matrix";

export function hitBottomBoundary(this: any) {
  const points: any[] = getBottomPoints(this._activeShape.boxArray);

  const mapRow = this._map.mapArray.length;

  return points.some((point) => {
    return point.y + this._activeShape.y + 1 >= mapRow;
  });
}

export function hitBottomBox(this: any) {
  const points: any[] = getBottomPoints(this._activeShape.boxArray);

  return points.some((point) => {
    const row = point.y + this._activeShape.y + 1;
    const col = point.x + this._activeShape.x;

    return this._map.mapArray[row >= 0 ? row : 0][col] === -1;
  });
}

export function hitHorizontalBoundary(this: any, type: string) {
  const index = getHorizontalIndex(this._activeShape.boxArray, type);

  if (type === "left") {
    return 0 > this._activeShape.x + index - 1;
  } else {
    return this._activeShape.x + index + 2 > this._map._mapCol;
  }
}

export function hitHorizontalBox(this: any, type: string) {
  const points = getHorizontalPoints(this._activeShape.boxArray, type);

  return points.some((point) => {
    const row = point.y + this._activeShape.y;
    const col = point.x + this._activeShape.x + (type === "left" ? -1 : 1);

    return row > 0 && this._map.mapArray[row][col] === -1;
  });
}
