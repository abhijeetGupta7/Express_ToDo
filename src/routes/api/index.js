const v1Rpouter = require("./v1");

const apiRouter=require("express").Router();

apiRouter.use("/v1",v1Rpouter);

module.exports=apiRouter;