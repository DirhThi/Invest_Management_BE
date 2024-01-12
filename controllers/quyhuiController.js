const QuyHui = require("../model/quyhui");


const quyhuiController = {
//post /quyhui/add
      addQuyhui : async (req, res, next) => {
        try {
            const { user,ten,batdau,sotien,sochanbatdau,chuki,trangthai} = req.body;
            const newQuyHui = new QuyHui({ user,ten,batdau,sotien,sochanbatdau,chuki,trangthai});
            const savedQuyHui = await newQuyHui.save();
            res.status(200).json(savedQuyHui);
        } catch (err) {;
            next(err);
        }
    },
//get /quyhui/getall
    getAllQuyhui: async (req, res,next) => {
        try {
          const { user} = req.body;
          const AllQuyhui = await QuyHui.find({"user" : user});
          res.status(200).json(AllQuyhui);
        } catch (err) {
            next(err);
        }
      },
//get /quyhui/
      getbyidQuyhui: async (req, res) => {
        try {
          const quyhui = await QuyHui.findById(req.params.id)/*.populate("dslichsugd")*/;
          
          res.status(200).json(quyhui);
        } catch (err) {
          res.status(500).json(err);
        }
      },

      
     

     
    };
    
    
   
    module.exports = quyhuiController;
    