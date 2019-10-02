const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");

const routes = express.Router();
const upload = multer(uploadConfig);

// SessionController Routes
routes.post('/sessions', SessionController.store);

// SpotController Routes
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single("thumbnail"), SpotController.store);

// DashboardController Routes
routes.get('/dashboard', DashboardController.show);

// BookingController Routes
routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;