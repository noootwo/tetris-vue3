export function getBottomPoints(matrix: any[]) {
  const points: any = {};

  const cols = getBottomIndex(matrix);

  cols.forEach((col) => {
    matrix.forEach((line: any, index: any) => {
      if (line[col] > 0) {
        points[col] = {
          x: col,
          y: index,
        };
      }
    });
  });

  return Object.values(points);
}

export function getHorizontalPoints(matrix: any[], type: string) {
  const points: any[] = [];

  const col = getHorizontalIndex(matrix, type);

  matrix.forEach((line, index) => {
    if (line[col] > 0) {
      points.push({
        x: col,
        y: index,
      });
    }
  });

  return points;
}

function getBottomIndex(matrix: any[]) {
  const indexs: number[] = [];
  for (let i = 0; i < matrix[0].length; i++) {
    const boo = matrix.some((line) => {
      return line[i] > 0;
    });

    boo && indexs.push(i);
  }

  return indexs;
}

export function getHorizontalIndex(matrix: any[], type: string) {
  const indexs = [];
  for (let i = 0; i < matrix[0].length; i++) {
    const boo = matrix.some((line) => {
      return line[i] > 0;
    });

    boo && indexs.push(i);
  }

  return type === "left" ? Math.min(...indexs) : Math.max(...indexs);
}
