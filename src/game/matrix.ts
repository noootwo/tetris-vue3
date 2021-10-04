export function getBottomPoints(matrix: any[]) {
  const points: any = [];
  const row = matrix.length;
  matrix[row - 1].forEach((item: any, index: any) => {
    points.push({
      x: index,
      y: row - 1,
    });
  });

  return points;
}
