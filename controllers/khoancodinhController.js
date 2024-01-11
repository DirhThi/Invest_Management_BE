const KhoanCoDinh = require("../model/khoancodinh");
const ResError = require("../utils/ResError");
const lsgiaodich=require("../model/lsgiaodich");
const Khoancodinh = require("../model/khoancodinh");

const khoancodinhController = {
//post /khoancodinh/add
      addKhoanCoDinh : async (req, res, next) => {
        try {
            const { user,loaiquy,ten,batdau,sotien,chuki,thoihan,ketthuc,trangthai} = req.body;
            const newKhoanCoDinh = new KhoanCoDinh({ user,loaiquy,ten,batdau,sotien,chuki,thoihan,ketthuc,trangthai});
            const savedKhoanCoDinh = await newKhoanCoDinh.save();
            res.status(200).json(savedKhoanCoDinh);
        } catch (err) {;
            next(err);
        }

    },
//get /khoancodinh/getall
    getAllKhoancodinh: async (req, res,next) => {
        try {
          const AllKhoancodinh = await KhoanCoDinh.find();
          res.status(200).json(AllKhoancodinh);
        } catch (err) {
            next(err);
        }
      },
//get /khoancodinh/
      getbyidKhoancodinh: async (req, res) => {
        try {
          const khoancodinh = await KhoanCoDinh.findById(req.params.id)/*.populate("dslichsugd")*/;
          
          res.status(200).json(khoancodinh);
        } catch (err) {
          res.status(500).json(err);
        }
      },

      
     

     
    };
    
    
   
    module.exports = khoancodinhController;
    