import catchAsync from "../Utils/catchAsync.js";
import Product from "../Models/product.model.js";
import Category from "../Models/category.model.js";

export const search = catchAsync(async (req, res, next) => {
  const { query } = req.body;
  const product = await Product.find({ name: { $regex: query, $options: "i" } });
  const category = await Category.find({
    title: { $regex: query, $options: "i" } });
  let success = true;
  if (product.length == 0 && category.length == 0) {
    success = false;
  }
  return res.status(200).json({
    success,
    data: { product, category },
  });
});
