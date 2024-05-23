import { DataSyncingInfo } from "./shared";

export interface DataStore {
    timestamp: number;
    data: string;
}

export class Server {
    store: DataStore = {
        timestamp: 1,
        data: 'new data'
    }
    getData(clientTimestamp: number): DataSyncingInfo {
        // if server's data is the most recent, return data
        if (clientTimestamp < this.store.timestamp) {
            return {
                timestamp: this.store.timestamp,
                data: this.store.data
            }
        } else {
            return {
                timestamp: 0,
                data: ''
            }
        }
    }
}