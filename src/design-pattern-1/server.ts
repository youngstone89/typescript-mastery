export interface DataStore {
    timestamp: number;
    data: string | undefined;
}
export class Server {
    store: DataStore = {
        timestamp: 1,
        data: ''
    }
    getData(clientTimestamp: number): DataStore | undefined {
        // if server's data is the most recent, return data
        if (clientTimestamp < this.store.timestamp) {
            return this.store;
        } else {
            return undefined;
        }
    }
}