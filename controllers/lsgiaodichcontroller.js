const Khoancodinh = require("../model/khoancodinh");
const Lsgiaodich = require("../model/lsgiaodich");
const Quyvay = require("../model/quyvay");
const Sotietkiem = require("../model/sotietkiem");


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

    addLSSTK : async (req, res) => {
        try {
            const { loaigiaodich,sotien,thoigian,quy} = req.body;
            const newlsgiaodich = new Lsgiaodich({loaigiaodich,sotien,thoigian});
            const savedLSGD = await newlsgiaodich.save();
            const updatelsgd = Sotietkiem.findById(quy);
            await updatelsgd.updateOne({ $push: { dslichsugd: savedLSGD._id } });                                
            res.status(200).json(savedLSGD);
        } catch (err) {
            res.status(500).json(err);        }
    },

    addLSDH : async (req, res) => {
        try {
            const { loaigiaodich,sotien,thoigian,quy} = req.body;
            const newlsgiaodich = new Lsgiaodich({loaigiaodich,sotien,thoigian});
            const savedLSGD = await newlsgiaodich.save();
            const updatelsgd = Sotietkiem.findById(quy);
           // const sotientratruoc = updatelsgd.conlai- sotien; 
            await updatelsgd.updateOne(  { $set: { conlai: sotien} , $push:{ dslichsudaohan: savedLSGD._id } });  
            res.status(200).json(savedLSGD);
        } catch (err) {
            res.status(500).json(err);}
    },
    addLSQV : async (req, res) => {
        try {
            const { loaigiaodich,sotien,thoigian,quy} = req.body;
            const newlsgiaodich = new Lsgiaodich({loaigiaodich,sotien,thoigian});
            const savedLSGD = await newlsgiaodich.save();
            const updatelsgd = Quyvay.findById(quy);
            await updatelsgd.updateOne({ $push: { dslichsugd: savedLSGD._id } });                                
            res.status(200).json(savedLSGD);
        } catch (err) {
            res.status(500).json(err);        }
    },
    addLSTT : async (req, res) => {
        try {
            const { loaigiaodich,sotien,thoigian,quy} = req.body;
            const newlsgiaodich = new Lsgiaodich({loaigiaodich,sotien,thoigian});
            const savedLSGD = await newlsgiaodich.save();
            const updatelsgd = Quyvay.findById(quy);
           // const sotientratruoc = updatelsgd.conlai- sotien; 
            await updatelsgd.updateOne(  { $set: { conlai: sotien} , $push:{ dslichsutratruoc: savedLSGD._id } });  
            res.status(200).json(savedLSGD);
        } catch (err) {
            res.status(500).json(err);}
    },
    };

   
    
    
    module.exports = lsgiaodichController;
    