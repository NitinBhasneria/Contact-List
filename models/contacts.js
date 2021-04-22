const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    first_name: {
        type: String,               // Type of input
        required: true,             // necessity of input
    },
    last_name: {
        type: String, 
        required: true,
    },
    phone: {
        type: String,
        required: true,
    }
});

const Contact = module.exports = mongoose.model('Contact', ContactSchema);