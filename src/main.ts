import { createApp } from "vue";
import App from "./App.vue";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

socket.on("connect", () => {
  console.log("连接成功");
});

createApp(App).mount("#app");
