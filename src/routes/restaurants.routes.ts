import { Router } from "express";
import { RestaurantsController } from "../controllers/restaurantsController";


const router = Router();

router.get("/getRestaurants", RestaurantsController.getRestaurants);
router.post("/createRestaurant", RestaurantsController.createRestaurant);
router.post("/PushDishToRestaurant", RestaurantsController.PushDishToRestaurant);
router.post("/PushChefToRestaurant", RestaurantsController.PushChefToRestaurant);
router.put("/updateRestaurant", RestaurantsController.updateRestaurant);

export default router;


