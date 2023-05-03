const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

const productsRouterV1 = require("./routes/v1/productsRouterV1");
const productsRouterV2 = require("./routes/v2/productsRouterV2");

app.use('/api/v1/', productsRouterV1); // v1 uses MongoDB Driver
app.use('/api/v2/', productsRouterV2); // v2 uses Mongoose

const port = 3001;
app.listen(port, () => {
    console.log("Server listening on port " + port);
});