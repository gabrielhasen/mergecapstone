const express = require("express");
const router = express.Router();

const Reservation = require("../../models/Reservation");

// @route GET api/reservations/getRes
// @desc Get all reservations
// @access at the moment - public
router.get("/getRes", (req, res) => {
    Reservation.find({}).then(reservations => res.json(reservations));
}
);

router.post("/newReservation", (req, res) => {
    //Check for conflicts here??
    Reservation.findOne({ id: req.body.id }).then(reservation => {
        if(reservation) {
            return res.status(400).json({ id: "Reservation id already exists" });
        } else {
            const newReservation = new Reservation({
                id: req.body.id,
                start: req.body.start,
                end: req.body.end,
                resourceId: req.body.resourceId,
            });

            newReservation.save().then(reservation => res.json(reservation));
        }
    });
});

module.exports = router;