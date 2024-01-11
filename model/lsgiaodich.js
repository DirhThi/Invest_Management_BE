const mongoose = require("mongoose");
const lsgiaodichSchema = new mongoose.Schema(
    {
        loaigiaodich: {
            type: String,
            required: true,
        },
        sotien: {
            type: Number,
            required: true,
        },
        thoigian: {
            type: Date,
            required: true,
        },
        
    },
);


let Lsgiaodich = mongoose.model('lsgiaodich', lsgiaodichSchema);

module.exports = Lsgiaodich;
