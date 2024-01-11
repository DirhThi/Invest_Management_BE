const mongoose = require("mongoose");
const sotietkiemSchema = new mongoose.Schema(
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
        laisuat: {
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
        batdau: {
            type: Date,
            required: true,
        },
        ketthuc: {
            type: Date,
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
          dslichsudaohan: [
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


let Sotienkiem = mongoose.model('sotietkiem', sotietkiemSchema);

module.exports = Sotienkiem;
