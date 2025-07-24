import { Router } from "express";
import { good_controller } from "./good.controller";

const router = Router();

router.post("/", 
auth(USER_ROLE.USER),  upload.single("image") ,   validateRequest( good_Validation.createGood),  AwsUploadSingle("image"),  good_controller.createGood);

router.get("/", good_controller.getAllGood);

router.get("/:id", good_controller.getGoodById);

router.put("/:id", auth(USER_ROLE.USER),  upload.single("image") ,   validateRequest( good_Validation.updateGood),  AwsUploadSingle("image"), good_controller.updateGood);

router.delete("/:id", good_controller.softDeleteGood);

export const goodRoute = router;
