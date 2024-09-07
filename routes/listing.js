const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middlewares.js");

const listingController = require("../controllers/listing.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// router
//   .route("/")
//   .get(wrapAsync(listingController.index))
//   .post(isLoggedIn, validateListing, wrapAsync(listingController.createListing))
//   .post(upload.single("listing[image]"), (req, res) => {
//     res.send(req.file);
//   });

router.route("/").get(wrapAsync(listingController.index)).post(
  isLoggedIn, // check if the user is logged in
  upload.single("listing[image]"), // handle the file upload
  validateListing, // validate the listing
  wrapAsync(listingController.createListing) // call the controller to create the listing
);

// New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEdit)
);

module.exports = router;
