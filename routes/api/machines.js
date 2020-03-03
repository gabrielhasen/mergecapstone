const express = require("express");
const router = express.Router();

const Machine = require("../../models/Machine");

// @route GET api/machines/getAll
// @desc Get all machines
// @access at the moment - public
router.get("/getAll", (req, res) => {
    Machine.find({}).then(machines => res.json(machines));
}
);

router.post("/newMachine", (req, res) => {
  
    Machine.findOne({ id: req.body.id }).then(machine => {
      if (machine) {
        return res.status(400).json({ id: "Machine already exists" });
      } else {
        const newMachine = new Machine({
          id: req.body.id,
          name: req.body.name,
        });

        newMachine.save().then(machine => res.json(machine));
      }
    });
  });

module.exports = router;