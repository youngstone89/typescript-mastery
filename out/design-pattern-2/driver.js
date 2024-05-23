"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client");
const server_1 = require("./server");
let server = new server_1.Server();
let client = new client_1.Client(server);
client.sync();
console.log(client.store);
