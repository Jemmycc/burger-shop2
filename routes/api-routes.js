var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.redirect("/burgers");
    });

    app.get("/burgers", function (req, res) {
        db.burgers.findAll({})
            .then(function (data) {
                res.render("index", { burgers: data });
            });
    });

    app.post("/burgers/create", function (req, res) {
        db.burgers.create({
            burger_name: req.body.burger
        })
            .then(function (result) {
                res.json({ id: result.insertId });
            });
    });

    app.put("/burgers/update/:id", function (req, res) {
        console.log(req.body.burger);

        db.burgers.update({
            devoured: true
        }, {
                where: {
                    id: req.params.id
                }
            })
            .then(function () {
                res.status(200).end();
            });
    });
};
