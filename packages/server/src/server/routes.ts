import express, { Router } from "express";
import multer from "multer";
import formidable from "express-formidable";

import { authenticate, register } from "../api/auth";
import { verifyToken, verifyAdminRole } from "../api/helpers";
import { UserController } from "../api/user.controller";
import { PostController } from "../api/post.controller";

export const router: Router = express.Router();
export default router;

const secureRouter: Router = express.Router();
const adminRouter: Router = express.Router();

const postsUploader = multer({ dest: "uploads/posts/" });
router.use("/uploads/posts", express.static("uploads/posts"));
router.use("/uploads/images", express.static("uploads/images"));

router.post("/register", register);
router.post("/authenticate", authenticate);

secureRouter.use(verifyToken);

secureRouter.get("/me", UserController.findMe);
router.get("/posts", PostController.findAllPosts);
secureRouter.post(
  "/posts",
  postsUploader.single("image"),
  PostController.createPost
);
secureRouter.post("/posts/:postId", PostController.updatePost);
secureRouter.post("/like_posts/:postId", PostController.likePost);
secureRouter.delete("/like_posts/:postId", PostController.dislikePost);

router.use(secureRouter);

adminRouter.use(verifyToken, verifyAdminRole);
adminRouter.get("/posts", PostController.findAllPostsPendingApproval);
adminRouter.post("/pending_posts/:postId/approve", PostController.adminApprovePost);
adminRouter.post("/pending_posts/:postId/deny", PostController.adminDenyApprovalPost);
adminRouter.post("/posts/:postId", PostController.updatePost);

router.use("/admin", adminRouter);
