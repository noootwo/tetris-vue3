import { getBottomPoints } from "./matrix";

export function hitBottomBoundary(this: any) {
  const points: any[] = getBottomPoints(this._activeShape.boxArray);

  const mapRow = this._map.mapArray.length;

  return points.some((point) => {
    return point.y + this._activeShape.y + 1 >= mapRow;
  });
}
