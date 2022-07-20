const router = require("express").Router();
const {
  getRecipes,
  postRecipe,
  putRecipe,
  deleteRecipe,
  getMyRecipes,
  getRecipe,
} = require("../../controllers/recipesController");
const { protect } = require("../../middlewares/authMiddleware");

router.route("/").get(protect, getRecipes).post(protect, postRecipe);
router.get("/:id", protect, getRecipe);
router.get("/me", protect, getMyRecipes);
router.route("/:id").put(protect, putRecipe).delete(protect, deleteRecipe);

exports.RecipesRouter = router;
