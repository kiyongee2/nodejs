const express = require("express");
const router = express.Router();
const { 
  getAllContacts, 
  createContact,
  getContact,
} = require("../controllers/contactController")

router.
  route("/").get(getAllContacts)
  
router
  .route("/add").post(createContact);

router
  .route("/:id").get(getContact);

module.exports = router;