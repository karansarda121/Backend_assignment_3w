const express = require("express");
const router = express.Router();
const {
  getUsers,
  addUser,
  claimPoints,
  getClaimHistory,
  getUserClaimHistory,
} = require("../controllers/userController");

router.get("/", getUsers);
router.post("/", addUser);
router.post("/claim", claimPoints);
router.get("/history", getClaimHistory);
router.get("/:userId/history", getUserClaimHistory);


module.exports = router;
