import express from "express";
import {
    getKomponen,
    getKomponenById,
    createKomponen,
    updateKomponen,
    deleteKomponen,
} from "../controller/KomponenPc.js";

const router = express.Router();


router.get("/komponens", getKomponen);
router.get("/komponen/:id", getKomponenById);
router.post("/komponen", createKomponen);
router.patch("/komponen/:id", updateKomponen);
router.delete("/komponen/:id", deleteKomponen);

export default router;