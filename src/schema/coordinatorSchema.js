const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coordinatorSchema = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    phone: {type: String}
},
{
    timestamps: true
}
);
module.exports = mongoose.model('Coordinator', coordinatorSchema);