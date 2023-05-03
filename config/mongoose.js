const mongoose = require('mongoose');

const uri = "mongodb+srv://admin:passwordadmin@tugas-eduwork.whlvwc1.mongodb.net/?retryWrites=true&w=majority";

(async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connection to database: Success (Mongoose)");
    }
    catch(error) {
        console.log("Connection to database: Failed (Mongoose)--> ");
    }
})();

module.exports = mongoose;