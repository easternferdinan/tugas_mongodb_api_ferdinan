const client = require("../../config/mongodb");
const ObjectID = require("mongodb").ObjectId;

const db = client.db("test");
const products = db.collection("products");

const connection = {
    open: async function open() {
        try {
            await client.connect();
        } catch (error) {
            console.error("Connection to database failed --> ", error);
        }
    },
    close: async function close() { 
        try {
            await client.close();
        } catch (error) {
            console.error("Failed to closing connection to database --> ", error)
        }
    }
}

exports.getAll = async (req, res) => {
    await connection.open();

    try {
        const findCursor = await products.find();
        let findResult = [];

        for await (const doc of findCursor) {
            findResult = [...findResult, doc];
        }

        await connection.close();
        res.send(findResult);
    } catch(error) {
        console.error("Failed to fetch data from database --> ", error);
        res.send("Failed to fetch data from database");
    }
}

exports.insertOne = async (req, res) => {
    await connection.open();

    try {
        const insertionResult = await products.insertOne(req.body);

        await connection.close();
        res.send(insertionResult);
    } catch(error) {
        console.error("Failed to insert data into database --> ", error);
        res.send("Failed to insert data into database");
    }
}

exports.updateOne = async (req, res) => {
    await connection.open();

    try {
        const filter = {
            _id: new ObjectID(req.body.id),
        };
        const updateData = {
            $set: {
                name: req.body.name,
                price: req.body.price,
                stock: req.body.stock,
                active: req.body.active,
            }
        };

        const updateResult = await products.updateOne(filter, updateData);

        await connection.close();
        res.send(updateResult);
    } catch (error) {
        console.error("Failed to update data into database --> ", error);
        res.send("Failed to update data into database");
    }
}

exports.deleteOne = async (req, res) => {
    await connection.open();

    try {
        const deleteResult = await products.deleteOne({_id: new ObjectID(req.body.id)})

        await connection.close();
        res.send(deleteResult);
    } catch (error) {
        console.error("Failed to delete data from database --> ", error);
        res.send("Failed to delete data from database");
    }
}