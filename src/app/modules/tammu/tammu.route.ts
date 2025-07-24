import { Router } from "express";
import { tammu_controller } from "./tammu.controller";

const router = Router();

router.post("/", 
auth(USER_ROLE.USER),  upload.single("image") ,   validateRequest( tammu_Validation.createTammu),  AwsUploadSingle("image"),  tammu_controller.createTammu);

router.get("/", tammu_controller.getAllTammu);

router.get("/:id", tammu_controller.getTammuById);

router.put("/:id", auth(USER_ROLE.USER),  upload.single("image") ,   validateRequest( tammu_Validation.updateTammu),  AwsUploadSingle("image"), tammu_controller.updateTammu);

router.delete("/:id", tammu_controller.softDeleteTammu);

export const tammuRoute = router;
