const SoTietKiem = require("../model/sotietkiem");


const sotietkiemController = {
//post /sotietkiem/add
      addSotietkiem : async (req, res, next) => {
        try {
            const { user,ten,batdau,sotien,laisuat,chuki,thoihan,ketthuc,conlai,trangthai} = req.body;
            const newSotietkiem = new SoTietKiem( { user,ten,batdau,sotien,laisuat,chuki,thoihan,ketthuc,conlai,trangthai});
            const savedSotietkiem = await newSotietkiem.save();
            res.status(200).json(savedSotietkiem);
        } catch (err) {;
            next(err);
        }

    },
//get /sotietkiem/getall
    getAllSotietkiem: async (req, res,next) => {
        try {
          const { user} = req.body;
          const allSotietkiem = await SoTietKiem.find({"user" : user});
          res.status(200).json(allSotietkiem);
        } catch (err) {
            next(err);
        }
      },
//get /sotietkiem/
      getbyidSotietkiem: async (req, res) => {
        try {
          const Sotietkiem = await SoTietKiem.findById(req.params.id)/*.populate("dslichsugd")*/;
          
          res.status(200).json(Sotietkiem);
        } catch (err) {
          res.status(500).json(err);
        }
      },

      
     

     
    };
    
    
   
    module.exports = sotietkiemController;
    