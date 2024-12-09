const express = require('express');
const app = express();
const cors = require('cors');

const vehicles = [
  { vehicleId: 132456, type: "Scooter", lock: "Lock", speed: "0 km/h", batteryLevel: "100%", status: "PARKING", location: "3.142,012", lastUpdated: "2019-07-02 9:00AM" },
  { vehicleId: 987654, type: "Scooter", lock: "Unlock", speed: "5 km/h", batteryLevel: "75%", status: "MOVING", location: "3.142,012", lastUpdated: "2019-07-02 10:00AM" },
  { vehicleId: 569825, type: "Scooter", lock: "Unlock", speed: "5 km/h", batteryLevel: "75%", status: "MOVING", location: "3.142,012", lastUpdated: "2019-07-02 10:00AM" },
  { vehicleId: 125864, type: "Scooter", lock: "Unlock", speed: "5 km/h", batteryLevel: "75%", status: "MOVING", location: "3.142,012", lastUpdated: "2019-07-02 10:00AM" },
  { vehicleId: 125864, type: "Scooter", lock: "Unlock", speed: "5 km/h", batteryLevel: "75%", status: "MOVING", location: "3.142,012", lastUpdated: "2019-07-02 10:00AM" },
];

app.use(cors());
app.use(express.json());

app.get('/api/vehicles', (req, res) => {
  res.json(vehicles);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
