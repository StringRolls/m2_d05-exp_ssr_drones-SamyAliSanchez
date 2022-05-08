
const express = require("express");

const router = express.Router();


// require the Drone model here
const Drone = require("../models/Drone.model");

// Iteration #2: List the drones
router.get('/drones', (req, res) => {
  Drone.find()
    .then((allTheDronesFromDB) => 
      res.render('drones/list', { drones : allTheDronesFromDB }))
    .catch((err) => {
      console.log("Err while getting the drones from the DB");
    });
});

// Iteration #3: Add a new drone
router
  .route("/drones/create")
  .get((req, res) => {
      res.render("drones/create-form")
  })
  .post((req, res) => {
    const { name, propellers, maxSpeed } = req.body;
    Drone.create({ name, propellers, maxSpeed })
      .then((newDrone) => res.redirect(`/drones`))
      .catch((err) => console.log(err));
  });

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
