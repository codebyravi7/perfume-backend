import mongoose from "mongoose";
const perfumeSchema = mongoose.Schema({
  name: String,
  price_Actual: String,
  price_Discounted: String,
  discount: String,
  image: String,
});
export const Perfume = mongoose.model("Perfume", perfumeSchema);
