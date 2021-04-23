const express = require('express'); // const as value of express not gonna changes
const router = express.Router();

const Contact = require('../models/contacts');

// router.get('/', (req, res, next) => {
//     res.send("Hello API");
// })

// retriving contact using "get()"
// After retriving the contacts all the contact of the contact list will be  saved in the variable contacts( used in res.son(contacts))
// ,which we are sending or responding back to our client in JSON format.
router.get('/contacts', (req, res, next) => {
    // for retreiving contact we will be using find 
    Contact.find((err, contacts) => {
        res.json(contacts);
    })
});
// whatever changes made to the /api/contacts will be directed to here

// add contact using the post methods
router.post('/contacts', (req, res, next) => {
    // logic to add contact
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
    })

    newContact.save((err, contact) => {
        if(err){
            res.json({msg: 'Failed to add contact'});
        }
        else {
            res.json({msg: 'Contact added succesfully'});
        }
    })
});

// deleting contact via delete method
// we will be deleting the contact by referring to that particular contact by its ID
router.delete('/contacts/:id', (req, res, next) => {
    // logic to add contact
    Contact.remove({_id: req.params.id}, (err, result)=>{
        if(err) {
            res.json(err);
        } 
        else {
            res.json(result);
        }
    })
});

module.exports = router;