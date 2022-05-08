// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");
require('../db/index');

const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];

  Drone.create(drones)
  .then(dronesFromDB => {
    console.log(`Created ${dronesFromDB.length} drones`);
    mongoose.connection.close();
  })
  .catch(err =>
    console.log(`An error occurred while getting books from the DB: ${err}`)
  );