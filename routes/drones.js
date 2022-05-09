const express = require("express");

const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

// Iteration #2: List the drones
router.get("/drones", (req, res) => {
  Drone.find()
    .then((allTheDronesFromDB) =>
      res.render("drones/list", { drones: allTheDronesFromDB })
    )
    .catch((err) => {
      console.log("Err while getting the drones from the DB");
    });
});

// Iteration #3: Add a new drone
router
  .route("/drones/create")
  .get((req, res) => {
    res.render("drones/create-form");
  })
  .post((req, res) => {
    const { name, propellers, maxSpeed } = req.body;
    Drone.create({ name, propellers, maxSpeed })
      .then(newDrone => res.redirect(`/drones`))
      .catch((err) => console.log(err));
  });

// Iteration #4: Update the drone
router.route('/drones/:id/edit')
  .get((req, res,) => {
    const { id } = req.params
    Drone.findById(id)
    .then((drone) => res.render("drones/update-form", drone))
    .catch(err => console.log(err))})
  .post((req, res) => {
    const { id } = req.params;
    const { name, propellers, maxSpeed } = req.body;
    Drone.findByIdAndUpdate(id, { name, propellers, maxSpeed })
      .then((editedDrone) => res.redirect(`/drones`))
      .catch(err => console.log(err));
  });

    // Iteration #5: Delete the drone
router.post("/drones/:id/delete", (req, res) => {
  const {id} = req.params
  Drone.findByIdAndDelete(id)
  .then((deletedDrone)=>{
  res.redirect("/drones")
  })
});

module.exports = router;
