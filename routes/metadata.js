var router = require("express").Router();
const { ActionManager } = require("../actions/action-manager.js");
const { FetchMetadataList } = require("../actions/get-metadata-list");

router.get("/get-meta-data/:module_name/:screen_name", (req, res, next) => {
  let module_name = req.params.module_name;
  let screen_name = req.params.screen_name;
  let action = new FetchMetadataList(module_name, screen_name);
  ActionManager.execute(action)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((error) => {
      let json = error.message;
      res.status(error.status || 400).send(json);
    });
});
module.exports = router;
