const Khoancodinh = require("../model/khoancodinh");
const Lsgiaodich = require("../model/lsgiaodich");
const ResError = require("../utils/ResError");

const lsgiaodichController = {
     addLSKCD : async (req, res) => {
        try {
            const { loaigiaodich,sotien,thoigian,quy} = req.body;
            const newlsgiaodich = new Lsgiaodich({loaigiaodich,sotien,thoigian});
            const savedLSGD = await newlsgiaodich.save();
            const updatelsgd = Khoancodinh.findById(quy);
            await updatelsgd.updateOne({ $push: { dslichsugd: savedLSGD._id } });                                
            res.status(200).json(savedLSGD);
        } catch (err) {
            res.status(500).json(err);        }
    },
    };
    
    module.exports = lsgiaodichController;
    