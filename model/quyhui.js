const mongoose = require("mongoose");
const quyhuiSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            require: true,
        },
        ten: {
            type: String,
            required: true,
        },
        sotien: {
            type: Number,
            required: true,
        },
        batdau: {
            type: Date,
            required: true,
        },
        sochanbatdau: {
            type: Number,
            required: true,
        },
        chuki: {
            type: String,
            required: true,
        },
        dslichsuhui: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "lshui",
            },
          ],
        trangthai: {
            type: String,
            required: true,
        },
       
    },
);


let Quyhui = mongoose.model('quyhui', quyhuiSchema);

module.exports = Quyhui;
