import express from "express";
import ctrl from "../controllers/qrcode.controllers";

const router = express.Router();

router.route("/api/qrcode").get(ctrl.list).post(ctrl.create);
router.route("/api/qrcode/:id").delete(ctrl.remove);

export default router;
