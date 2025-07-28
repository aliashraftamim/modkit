import { Router } from "express";
import { tamim_controller } from "./tamim.controller";
import { tamimvalidation } from "./tamim.validation";

const router = Router();

router.post("/", 
auth(USER_ROLE.USER),  upload.single("image") ,   validateRequest( tamimvalidation.createTamim),  AwsUploadSingle("image"),  tamim_controller.createTamim);

router.get("/", tamim_controller.getAllTamim);

router.get("/:id", tamim_controller.getTamimById);

router.put("/:id", auth(USER_ROLE.USER),  upload.single("image") ,   validateRequest( tamimvalidation.updateTamim),  AwsUploadSingle("image"), tamimController.updateTamim);

router.delete("/:id", tamim_controller.softDeleteTamim);

export const tamim_route = router;
