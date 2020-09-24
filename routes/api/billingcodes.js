const express = require("express");
const router = express.Router();

const BillingCode = require("../../models/BillingCode");

// @route GET api/billingcodes/getCodes
// @desc Get all billing codes
// @access Public
router.get("/getCodes", (req, res) => {
    BillingCode.find({}).then(billingcodes => res.json(billingcodes));
}
);

// @route POST api/billingcodes/newCode
// @desc Create a new billing code
// @access Public
router.post("/newCode", (req, res) => {
    BillingCode.findOne({ code: req.body.code }).then(billingcode => {
        if (billingcode) {
            return res.status(400).json({ code: "Code already exists" });
        } else {
            const newCode = new BillingCode({
                code: req.body.code,
                desc: req.body.desc,
            });

            newCode.save().then(billingcode => res.json(billingcode));
        }
    });
});

// @route POST api/billingcodes/checkCode
// @desc Validate a billing code as valid (for reservation)
// @access Public
router.post("/checkCode", (req, res) => {
    BillingCode.findOne({ code: req.body.code }).then(billingcode => {
        if (billingcode) {
            return res.json(billingcode);
        } else {
            return res.status(404).json({ codenotfound: "Not Found" });
        }
    });
});

// @route DELETE api/billingcodes/delete/:id
// @desc Delete a specific billing code
// @access Public
router.delete("/delete/:id", (req, res) => {
    BillingCode.findById(req.params.id).then(code => {
        code.remove().then(() => res.json({ success: true }));
    });
}
);

module.exports = router;