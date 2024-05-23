import { Client } from "./client";
import { Server } from "./server";

let server: Server = new Server()
let client: Client = new Client(server)
client.sync()
console.log(client.store)