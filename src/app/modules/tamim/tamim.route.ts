import { Router } from "express";
import { tamim_controller } from "./tamim.controller";

const router = Router();

router.post("/", 
auth(USER_ROLE.USER),  upload.single("image") ,   validateRequest( tamim_Validation.createTamim),  AwsUploadSingle("image"),  tamim_controller.createTamim);

router.get("/", tamim_controller.getAllTamim);

router.get("/:id", tamim_controller.getTamimById);

router.put("/:id", auth(USER_ROLE.USER),  upload.single("image") ,   validateRequest( tamim_Validation.updateTamim),  AwsUploadSingle("image"), tamim_controller.updateTamim);

router.delete("/:id", tamim_controller.softDeleteTamim);

export const tamimRoute = router;
