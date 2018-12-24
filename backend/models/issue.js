const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const issueSchema = mongoose.Schema({
    StudentId: {
        type: String,
        required: true

    },
    StudentName: {
        type: String,
        required: true

    },
    Email: {
        type: String,
        required: true

    },
    Class: {
        type: String,
        required: true

    },
    EnrollementYear: {
        type: String,
        required: true

    },
    City: {
        type: String,
        required: true

    },
    Country: {
        type: String,
        required: true

    },

});
issueSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Issue", issueSchema);