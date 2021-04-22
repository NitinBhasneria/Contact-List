const express = require('express'); // const as value of express not gonna changes
const router = express.Router();

router.use('/contacts', (req, res, next) => {
    res.send('Retrieving the Contact List');
});        // whatever changes made to the /api/contacts will be directed to here

module.exports = router;