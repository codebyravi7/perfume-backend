import express from "express";
import {
  getAllperfumes,
  getSearchperfumes,
  getOnePerfume,
} from "../Controllers/Perfumes.controller.js";
import { checkout } from "../Controllers/payment.js";

const router = express.Router();

router.get("/perfumes/:key", getAllperfumes);
router.get("/perfume/:id", getOnePerfume);
router.get("/perfumes/search/:keyword", getSearchperfumes);
router.post("/payment/checkout", checkout);
export default router;
