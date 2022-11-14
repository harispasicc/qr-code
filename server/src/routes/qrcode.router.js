import express from "express";
import ctrl from "../controllers/qrcode.controller";

const router = express.Router();

router.route("/").get(ctrl.home);
router.route("/qrcode").get(ctrl.list).post(ctrl.create);
router.route("/qrcode/:id").delete(ctrl.remove).get(ctrl.getQrCode);

export default router;
