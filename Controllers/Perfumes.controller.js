import { Perfume } from "../Models/Perfumes.model.js";

const parsePrice = (priceString) => {
  if (!priceString) return null; // Handle null or undefined prices
  return parseFloat(priceString.replace(/₹|,/g, "")); // Remove ₹ and commas, and convert to number
};
export const getAllperfumes = async (req, res) => {
  let { key } = req.params;

  if (key !== "5000" && key !== "10000" && key !== "15000" && key !== "20000") {
    key = "100000000";
  }
  try {
    const perfumes = await Perfume.find().then((perfumesList) => {
      return perfumesList.filter((perfume) => {
        // Parse the key and the perfume prices
        const keyPrice = parsePrice(key);

        const priceToCompare = perfume.price_Discounted
          ? parsePrice(perfume.price_Discounted)
          : parsePrice(perfume.price_Actual);
        return priceToCompare <= keyPrice;
      });
    });
    res.status(200).json({ message: "All perfumes", success: true, perfumes });
  } catch (err) {
    res.status(500).json({
      message: "Error in fetching perfumes from database",
      success: false,
      err,
    });
  }
};
export const getOnePerfume = async (req, res) => {
  try {
    const {id} = req.params;
    console.log("hii",id)
    const perfume = await Perfume.findById(id);

    res.status(200).json({ message: "Fetched perfume", success: true, perfume });
  } catch (err) {
    res.status(500).json({
      message: "Error in fetching perfume from database",
      success: false,
      err,
    });
  }
};
export const getSearchperfumes = async (req, res) => {
  try {
    const { keyword } = req.params;
    // console.log("keyword:", keyword);
    const perfumes = await Perfume.find({
      name: { $regex: keyword, $options: "i" },
    });
    // console.log("perfumes:", perfumes);

    res
      .status(200)
      .json({ message: "Searched perfumes", success: true, perfumes });
  } catch (err) {
    res.status(500).json({
      message: "Error in searching perfumes from database",
      success: false,
      err,
    });
  }
};
