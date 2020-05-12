const models = require("../models");

const Features = models.Features;

/*
REST API
list: to get all data in the table
retrieve: to get single data in the table
create: to create new records
update: to update new records
*/
module.exports.list = (req, res) => {
  return Features.findAll({ order: [["createdAt", "DESC"]] })
    .then(features => {
      console.log(features);
      return res.render("success_view", {
        table: "Features",
        items: features
      });
    })
    .catch(err => {
      res.status(404).send(err);
    });
};
