const Koa = require("koa");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = new Koa();
const httpServer = createServer(app.callback());
const io = new Server(httpServer, {
  /* options */
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  // ...
  console.log("有人来了");

  socket.on("down", () => {
    console.log("down");
    io.emit("down");
  });

  socket.on("rotate", () => {
    console.log("rotate");
    io.emit("rotate");
  });

  socket.on("left", () => {
    console.log("left");
    io.emit("left");
  });

  socket.on("right", () => {
    console.log("right");
    io.emit("right");
  });
});

httpServer.listen(3001);
