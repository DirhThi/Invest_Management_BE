const mongoose = require("mongoose");
const lshuiSchema = new mongoose.Schema(
    {
        Sochansong: {
            type: Number,
            required: true,
        },
        sotiendat: {
            type: Number,
            required: true,
        },
        thoigian: {
            type: Date,
            required: true,
        },
    },
);


let Lshui = mongoose.model('lshui', lshuiSchema);

module.exports = Lshui;
