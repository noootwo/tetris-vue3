import { Game } from "../src/game/game";

test("moveDown", () => {
  const map = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  const game = new Game(map);

  let timer = game.createShape();
  clearInterval(timer);
  timer = null;

  game.moveDown();
  expect(game.activeShape.y).toBe(4);

  game.moveDown();
  expect(game.activeShape.y).toBe(5);

  console.log(game.map.mapArray);
});
