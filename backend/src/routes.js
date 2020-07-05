const express = require("express");

const router = express.Router();
const BookConnection = require("./controllers/BookController");
const DonorController = require("./controllers/DonorController");
const CollectPointController = require("./controllers/CollectPointController");

const middleware = require("./middleware/auth");

//book

// GET /books?limit=10&skip=20
// GET /books?sortBy=createdAt:desc
router.get("/books", middleware.auth, BookConnection.list);

router.get("/book/:id", middleware.auth, BookConnection.listOne);
router.post("/books", middleware.auth, BookConnection.create);
router.delete("/books/:id", middleware.auth, BookConnection.delete);
router.put("/book/:id", middleware.auth, BookConnection.update);

//donor
router.get("/donor/me", middleware.auth, DonorController.list);
router.post("/donor/logout", middleware.auth, DonorController.logout);
router.post("/donor", DonorController.create);
router.post("/donor/login", DonorController.login);
router.delete("/donor/me", middleware.auth, DonorController.delete);

//collectpoint
router.get("/collect_point", middleware.auth, CollectPointController.list);
router.post("/collect_point", CollectPointController.create);
router.delete(
  "/collect_point/me",
  middleware.auth,
  CollectPointController.delete
);

module.exports = router;
