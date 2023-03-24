const { Router } = require("express");
const collectionRouter = require("./collection.routes");

const router = Router();

router.get("/healthcheck",(req,res) => {
    res.sendStatus(200);
})

router.use(collectionRouter);

module.exports = router;