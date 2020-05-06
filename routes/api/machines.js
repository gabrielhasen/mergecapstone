const express = require("express");
const router = express.Router();

const Machine = require("../../models/Machine");

// @route GET api/machines/getAll
// @desc Get all machines
// @access Public
router.get("/getAll", (req, res) => {
  Machine.find({}).then(machines => res.json(machines));
}
);

// @route POST api/machines/newMachine
// @desc Create a new machine
// @access Public
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

// @route POST api/machines/findMachine
// @desc Find a machine by calendar id
// @access Public
router.post("/findMachine", (req, res) => {
  console.log(req.body);
  Machine.findOne({ id: req.body.resourceId }).then(machine => {
    if (machine) {
      return res.json(machine);
    }
  });
});

// @route PATCH api/machines/update
// @desc Update machine information (admin view)
// @access Public
router.patch("/update", (req, res) => {
  let machineFields = {};

  machineFields.id = req.body.id;
  machineFields.name = req.body.name;

  Machine.findOneAndUpdate(
    { _id: req.body._id },
    { $set: machineFields },
    { new: true }
  )
    .then(machine => {
      res.json(machine);
    })
    .catch(err => console.log(err));
});

// @route DELETE api/machines/delete/:id
// @desc Delete a specific machine
// @access Public
router.delete("/delete/:id", (req, res) => {
  Machine.findById(req.params.id).then(machine => {
    machine.remove().then(() => res.json({ success: true }));
  });
});

module.exports = router;