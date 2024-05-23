"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
class Server {
    store = {
        timestamp: 1,
        data: 'new data'
    };
    getData(clientTimestamp) {
        // if server's data is the most recent, return data
        if (clientTimestamp < this.store.timestamp) {
            return {
                timestamp: this.store.timestamp,
                data: this.store.data
            };
        }
        else {
            return {
                timestamp: 0,
                data: ''
            };
        }
    }
}
exports.Server = Server;
