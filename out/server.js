"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
class Server {
    store = {
        timestamp: 1,
        data: ''
    };
    getData(clientTimestamp) {
        if (clientTimestamp < this.store.timestamp) {
            return this.store;
        }
        else {
            return undefined;
        }
    }
}
exports.Server = Server;
