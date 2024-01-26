const express = require("express");
const router = express.Router();
const pageContoller = require("../controllers/pageController");
const csvController = require("../controllers/csvController");

//get routes
router.get("/", pageContoller.super_admin);
router.get("/qr", pageContoller.qr);
router.get("/guest", pageContoller.guest);
router.get("/map", pageContoller.map);
router.get("/add-donation", pageContoller.add_donation);
router.get("/dep-admin", pageContoller.dep_admin); //here
router.get("/recepient", pageContoller.recepients_edit); //here
router.get("/recepients-view", pageContoller.recepients_view); //here
router.get("/donation-view", pageContoller.donation_view); //here
router.get("/logs", pageContoller.log);
router.get("/map-view", pageContoller.map); //here
router.get("/report2", pageContoller.reports); //here

//Download csv files
router.get("/recepients-view/export", csvController.csv_recepients);
router.get("/donation-view/export", csvController.csv_donations);
router.get("/logs/export", csvController.csv_logs);

//exporting router
module.exports = router;
