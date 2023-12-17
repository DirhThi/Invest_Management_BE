const mongoose = require("mongoose");
const quyvaySchema = new mongoose.Schema(
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
        sotien: {
            type: Number,
            required: true,
        },
        batdau: {
            type: Date,
            required: true,
        },
        laisuat: {
            type: Number,
            required: true,
        },
        chuki: {
            type: String,
            required: true,
        },
        uudai: {
            type: Number,
            required: true,
        },
        thoihanuudai: {
            type: Number,
            required: true,
        },
        conlai: {
            type: Number,
        },
        dslichsugd: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "lsgiaodich",
            },
          ],
          dslichsutratruoc: [
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


let Quyvay = mongoose.model('quyvay', quyvaySchema);

module.exports = Quyvay;
