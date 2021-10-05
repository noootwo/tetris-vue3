export function getBottomPoints(matrix: any[]) {
  const points: any = [];

  const row = matrix.length;

  matrix[row - 1].forEach((item: any, index: any) => {
    item > 0 &&
      points.push({
        x: index,
        y: row - 1,
      });
  });

  return points;
}
