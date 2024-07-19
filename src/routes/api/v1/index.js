const todoRouter = require('./todoRouter');

const v1Rpouter=require('express').Router();

v1Rpouter.use("/todos",todoRouter);

module.exports=v1Rpouter;