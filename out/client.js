"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
class Client {
    server;
    store = {
        timestamp: 0,
        data: undefined
    };
    constructor(server) {
        this.server = server;
    }
    sync() {
        let updatedStore = this.server.getData(this.store.timestamp);
        if (updatedStore) {
            this.store = updatedStore;
        }
    }
}
exports.Client = Client;
