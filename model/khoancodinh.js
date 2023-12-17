const mongoose = require("mongoose");

const khoancodinhSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            require: true,
        },
        loaiquy: {
            type: String,
            required: true,
        },
        ten: {
            type: String,
            required: true,
        },
        batdau: {
            type: Date,
            required: true,
        },
        sotien: {
            type: Number,
            required: true,
        },
        chuki: {
            type: String,
            required: true,
        },
        thoihan: {
            type: Number,
            required: true,
        },
        ketthuc: {
            type: Date,
            required: true,
        },
        dslichsugd: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "lsgiaodich",
            },
          ],
        trangthai: {
            type: String,
            required: true,
        },
       
    },
);


let Khoancodinh = mongoose.model('khoancodinh', khoancodinhSchema);

module.exports = Khoancodinh;
