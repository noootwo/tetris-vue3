import { getBottomPoints } from "./matrix";

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

    return this._map.mapArray[row][col] === -1;
  });
}
