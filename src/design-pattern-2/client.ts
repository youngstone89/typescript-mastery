import { Server } from "./server";
import { DataSyncingInfo } from "./shared";


export class Client {
    store: DataSyncingInfo = {
        timestamp: 0,
        data: 'old data'
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