const { Router } = require("express");
const {
  getRestaurants,
  createRestaurant,
  getNearBranch,
} = require("../controller/restaurantController");

const router = Router();

router.route("/").get(getRestaurants).post(createRestaurant);
router.route("/near").post(getNearBranch);

module.exports = router;
