const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://admin:passwordadmin@tugas-eduwork.whlvwc1.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);

(async() => {
    try {
        await client.connect();

        await client.db("test").command({ping: 1});
        console.log("Initial connection to database: Success (MongoDB Driver)");
    } catch(error) {
        console.error("Initial connection to database: Failed (MongoDB Driver) --> ", error);
    } finally {
        await client.close();
    }
})();

module.exports = client;