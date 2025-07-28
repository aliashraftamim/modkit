import { Router } from "express";
import { tammu_controller } from "./tammu.controller";
import { tammu_validation } from "./tammu.validation";

const router = Router();

router.post("/", 
auth(USER_ROLE.USER),  upload.single("image") ,   validateRequest( tammu_validation.createTammu),  AwsUploadSingle("image"),  tammu_controller.createTammu);

router.get("/", tammu_controller.getAllTammu);

router.get("/:id", tammu_controller.getTammuById);

router.put("/:id", auth(USER_ROLE.USER),  upload.single("image") ,   validateRequest( tammu_validation.updateTammu),  AwsUploadSingle("image"), tammuController.updateTammu);

router.delete("/:id", tammu_controller.softDeleteTammu);

export const tammu_route = router;
