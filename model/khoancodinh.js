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
            type: String,
            required: true,
        },
        sotien: {
            type: Number,
            required: true,
        },
        chuki: {
            type: Number,
            required: true,
        },
        thoihan: {
            type: Number,
            required: true,
        },
        ketthuc: {
            type: String,
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
        },
       
    },
);


let Khoancodinh = mongoose.model('khoancodinh', khoancodinhSchema);

module.exports = Khoancodinh;
