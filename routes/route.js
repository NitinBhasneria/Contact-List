const express = require('express'); // const as value of express not gonna changes
const router = express.Router();

// retriving contact
router.use('/contacts', (req, res, next) => {
    res.send('Retrieving the Contact List');
});        // whatever changes made to the /api/contacts will be directed to here

// add contact using the post methods
router.post('/contacts', (req, res, next) => {
    // logic to add contact
});

// deleting contact via delete method
// we will be deleting the contact by referring to that particular contact by its ID
router.delete('/contacts/:id', (req, res, next) => {
    // logic to add contact
});

module.exports = router;