const express=require('express');
const {addProduct,getProduct,getProductById,deleteProduct,updateProduct}=require('../controller/postController')
const router=express.Router();
// router.post("/product/add",addProduct);
// router.get("/product/get",getProduct)
// router.get("/product/getproductbyid/:id",getProductById)
// router.delete("/product/delete/:id",deleteProduct);
// router.put("/product/update/:id",updateProduct)

router.post("/addproducts",addProduct);
router.get("/getproducts",getProduct);
router.put("/updateproduct/:id",updateProduct);
router.delete("/deleteproduct/:id",deleteProduct);
router.get("/getproductbyid/:id",getProductById);



module.exports=router;