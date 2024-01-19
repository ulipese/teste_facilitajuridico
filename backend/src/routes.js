const { Router } = require("express");

const ClientController = require("./app/controllers/ClientController");

const router = Router();

router.get("/client/next-clients", ClientController.index);
router.post("/client/search", ClientController.show);
router.post("/client/create", ClientController.store);

module.exports = router;
