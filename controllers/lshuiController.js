const QuyHui = require("../model/quyhui");
const LsHui = require("../model/lshui");



const lshuiController = {
     addLSHui : async (req, res) => {
        try {
            const { Sochansong,sotiendat,thoigian,quyhui} = req.body;
            const newlshui = new LsHui({Sochansong,sotiendat,thoigian});
            const savedLSHui = await newlshui.save();
            const updatelshui = QuyHui.findById(quyhui);
            await updatelshui.updateOne({ $push: { dslichsuhui: savedLSHui._id } });                                
            res.status(200).json(savedLSHui);
        } catch (err) {
            res.status(500).json(err);        }
    },

  
    };

   
    
    
    module.exports = lshuiController;
    