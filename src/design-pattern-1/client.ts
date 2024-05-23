import { DataStore, Server } from "./server";


export class Client {
    store: DataStore = {
        timestamp: 0,
        data: undefined
    };
    constructor(public server: Server) {
        this.server = server;
    }
    sync(): void {
        let updatedStore = this.server.getData(this.store.timestamp)
        // if server data exists, update it.
        if (updatedStore) {
            this.store = updatedStore
        }
    }
}