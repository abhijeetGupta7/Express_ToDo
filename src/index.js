const express=require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser =require('body-parser');
const apiRouter = require('./routes/api');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.raw());
app.use("/api",apiRouter);

app.listen(PORT, ()=> {
    console.log(`Server is listening at ${PORT}`);
});