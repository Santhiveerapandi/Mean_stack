const express = require('express');
const mongoose = require('mongoose');
const URI = "mongodb://tester:test123@localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&authSource=test&authMechanism=SCRAM-SHA-256";
const app = express();

/* DB connection start */
mongoose.connect(URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true
});
const con = mongoose.connection;
con.on('open', () => {
    console.log('DB Connected....');
});
/* DB connection end */
// express json format use in route 
app.use(express.json());
const aliensRouter = require('./routers/aliens');
app.use('/aliens', aliensRouter);

/* App start */
app.listen(9000, () => {
    console.log("Server Started...");
})
/* App end */