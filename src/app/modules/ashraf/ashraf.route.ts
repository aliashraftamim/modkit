import { Router } from "express";
import { ashraf_controller } from "./ashraf.controller";
import { ashrafvalidation } from "./ashraf.validation";

const router = Router();

router.post("/", 
auth(USER_ROLE.USER),  upload.single("image") ,   validateRequest( ashraf_validation.createAshraf),  AwsUploadSingle("image"),  ashraf_controller.createAshraf);

router.get("/", ashraf_controller.getAllAshraf);

router.get("/:id", ashraf_controller.getAshrafById);

router.put("/:id", auth(USER_ROLE.USER),  upload.single("image") ,   validateRequest( ashraf_validation.updateAshraf),  AwsUploadSingle("image"), ashrafController.updateAshraf);

router.delete("/:id", ashraf_controller.softDeleteAshraf);

export const ashraf_route = router;
