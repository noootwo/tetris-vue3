import { io } from "socket.io-client";

export class Message {
  private socket;
  constructor() {
    this.socket = io("http://localhost:3001");

    this.socket.on("connect", () => {
      console.log("连接成功");
    });
  }

  emit(...args: any[]) {
    return this.socket.emit(...args);
  }

  on(...args: any[]) {
    return this.socket.on(...args);
  }
}
