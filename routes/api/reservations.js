const express = require("express");
const moment = require("moment");
const router = express.Router();

const Reservation = require("../../models/Reservation");

// @route GET api/reservations/getUpcomingRes
// @desc Get all reservations
// @access at the moment - public
//ADMIN
router.get("/getUpcomingRes", (req, res) => {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    Reservation.find({start : { $gte : now }}) 
    .populate("user")
    .populate("billingCode")
    .populate("resourceId")
    .populate("grad")
    .then(reservations => res.json(reservations));
}
);

//ADMIN
router.get("/getPastRes", (req, res) => {
    var now = moment().format("YYYY-MM-DD HH:mm:ss");
    Reservation.find({start : { $lt : now }}) 
    .populate("user")
    .populate("billingCode")
    .populate("resourceId")
    .populate("grad")
    .then(reservations => res.json(reservations));
}
);

//get for all students
router.get("/upcoming/:id", (req, res) => {
    let id = req.params.id;

    Reservation.find({user: id})
    .populate("user")
    .populate("billingCode")
    .populate("resourceId")
    .populate("grad")
    .then(reservation => res.json(reservation));
});

router.post("/newReservation", (req, res) => {
    //Check for conflicts here??
    Reservation.findOne({ id: req.body.id }).then(reservation => {
        if(reservation) {
            return res.status(400).json({ id: "Reservation id already exists" });
        } else {
            const newReservation = new Reservation({
                user: req.body.user,
                id: req.body.id,
                start: req.body.start,
                end: req.body.end,
                resourceId: req.body.resourceId,
                billingCode: req.body.billingCode,
                grad: req.body.grad
            });

            newReservation.save().then(reservation => res.json(reservation));
        }
    });
});

module.exports = router;