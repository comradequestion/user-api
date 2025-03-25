import { MongoClient, ObjectId } from 'mongodb'
import config from './config.js'

export class UserRoutes {
    constructor() {
        const env = 'dev';
        this.conf = config[env]
        const { host, port } = this.conf.database;

        this.db_name = this.conf.database.db_name;
        this.mongo_client = new MongoClient(`mongodb://${host}:${port}`);
        this.collection_name = "users";

    }

    async getUser(params) {
        const { id, min_age } = params;
        
        try {
            await this.mongo_client.connect();

            const db = this.mongo_client.db(this.db_name);
            const user_collection = db.collection(this.collection_name);

            var query = {
                _id: ObjectId.createFromHexString(id),
            };

            //Filter by age if the age parameter is valid
            if (min_age !== null && min_age > 0) {
                query = {
                    ...query,
                    age: {$gte: parseInt(min_age)}
                };
            }
            const cursor = await user_collection.find(query);
            return await cursor.toArray() || [];

        } catch (e) {
            console.error(e);
        }
    }
}
