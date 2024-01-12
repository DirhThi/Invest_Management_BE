const QuyVay = require("../model/quyvay");


const quyvayController = {
//post /quyvay/add
      addQuyvay : async (req, res, next) => {
        try {
            const { user,loaiquy,ten,batdau,sotien,laisuat,chuki,uudai,thoihanuudai,conlai,trangthai} = req.body;
            const newQuyVay = new QuyVay({ user,loaiquy,ten,batdau,sotien,laisuat,chuki,uudai,thoihanuudai,conlai,trangthai} );
            const savedQuyVay = await newQuyVay.save();
            res.status(200).json(savedQuyVay);
        } catch (err) {;
            next(err);
        }
    },
//get /quyvay/getall
    getAllQuyvay: async (req, res,next) => {
        try {
          const { user} = req.body;
          const AllQuyvay = await QuyVay.find({"user" : user});
          res.status(200).json(AllQuyvay);
        } catch (err) {
            next(err);
        }
      },
//get /quyvay/
      getbyidQuyvay: async (req, res) => {
        try {
          const quyvay = await QuyVay.findById(req.params.id)/*.populate("dslichsugd")*/;
          
          res.status(200).json(quyvay);
        } catch (err) {
          res.status(500).json(err);
        }
      },

      
     

     
    };
    
    
   
    module.exports = quyvayController;
    