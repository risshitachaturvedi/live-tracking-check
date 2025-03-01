// import React, { useState, useEffect } from "react";

// // Kalman filter function
// const kalmanFilter = (
//   measurement,
//   estimate,
//   estimateError,
//   processNoise,
//   measurementNoise
// ) => {
//   // Prediction
//   const predictedEstimate = estimate;
//   const predictedEstimateError = estimateError + processNoise;

//   // Update
//   const kalmanGain =
//     predictedEstimateError / (predictedEstimateError + measurementNoise);
//   const updatedEstimate =
//     predictedEstimate + kalmanGain * (measurement - predictedEstimate);
//   const updatedEstimateError = (1 - kalmanGain) * predictedEstimateError;

//   return { updatedEstimate, updatedEstimateError };
// };

// const IMUTracking = () => {
//   // State to hold filtered sensor data
//   const [accelEstimate, setAccelEstimate] = useState({ x: 0, y: 0, z: 0 });
//   const [rotationEstimate, setRotationEstimate] = useState({
//     alpha: 0,
//     beta: 0,
//     gamma: 0,
//   });
//   const [magnetEstimate, setMagnetEstimate] = useState({ x: 0, y: 0, z: 0 });

//   // State for estimate errors
//   const [accelEstimateError, setAccelEstimateError] = useState({
//     x: 1,
//     y: 1,
//     z: 1,
//   });
//   const [rotationEstimateError, setRotationEstimateError] = useState({
//     alpha: 1,
//     beta: 1,
//     gamma: 1,
//   });
//   const [magnetEstimateError, setMagnetEstimateError] = useState({
//     x: 1,
//     y: 1,
//     z: 1,
//   });

//   // State for velocity and position
//   const [velocity, setVelocity] = useState({ x: 0, y: 0, z: 0 });
//   const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

//   // State to track permission status
//   const [isPermissionGranted, setIsPermissionGranted] = useState(false);
//   const [isPermissionRequested, setIsPermissionRequested] = useState(false);

//   // Constants for Kalman filter noise values
//   const processNoise = 0.001;
//   const measurementNoise = 0.1;

//   // Function to handle permission request
//   const handlePermissionRequest = () => {
//     setIsPermissionRequested(true);
//     setIsPermissionGranted(true);
//   };

//   // Effect hook to listen to motion data after permission is granted
//   useEffect(() => {
//     if (isPermissionGranted) {
//       let previousTimestamp = Date.now();

//       const handleDeviceMotion = (event) => {
//         const currentTimestamp = Date.now();
//         const deltaTime = (currentTimestamp - previousTimestamp) / 1000; // Time difference in seconds
//         previousTimestamp = currentTimestamp;

//         const { x = 0, y = 0, z = 0 } = event.acceleration || {};

//         // Apply Kalman filter to accelerometer data
//         const accelX = kalmanFilter(
//           x,
//           accelEstimate.x,
//           accelEstimateError.x,
//           processNoise,
//           measurementNoise
//         );
//         const accelY = kalmanFilter(
//           y,
//           accelEstimate.y,
//           accelEstimateError.y,
//           processNoise,
//           measurementNoise
//         );
//         const accelZ = kalmanFilter(
//           z,
//           accelEstimate.z,
//           accelEstimateError.z,
//           processNoise,
//           measurementNoise
//         );

//         // Integrate acceleration to get velocity (Velocity = Acceleration * Time)
//         const newVelocityX = velocity.x + accelX.updatedEstimate * deltaTime;
//         const newVelocityY = velocity.y + accelY.updatedEstimate * deltaTime;
//         const newVelocityZ = velocity.z + accelZ.updatedEstimate * deltaTime;

//         // Update the velocity state
//         setVelocity({ x: newVelocityX, y: newVelocityY, z: newVelocityZ });

//         // Integrate velocity to get position (Position = Velocity * Time)
//         const newPosX = position.x + newVelocityX * deltaTime;
//         const newPosY = position.y + newVelocityY * deltaTime;
//         const newPosZ = position.z + newVelocityZ * deltaTime;

//         // Update the position state
//         setPosition({ x: newPosX, y: newPosY, z: newPosZ });

//         // Update accelerometer estimates with filtered data
//         setAccelEstimate({
//           x: accelX.updatedEstimate,
//           y: accelY.updatedEstimate,
//           z: accelZ.updatedEstimate,
//         });
//         setAccelEstimateError({
//           x: accelX.updatedEstimateError,
//           y: accelY.updatedEstimateError,
//           z: accelZ.updatedEstimateError,
//         });

//         const { alpha = 0, beta = 0, gamma = 0 } = event.rotationRate || {};

//         // Apply Kalman filter to rotation data
//         const rotAlpha = kalmanFilter(
//           alpha,
//           rotationEstimate.alpha,
//           rotationEstimateError.alpha,
//           processNoise,
//           measurementNoise
//         );
//         const rotBeta = kalmanFilter(
//           beta,
//           rotationEstimate.beta,
//           rotationEstimateError.beta,
//           processNoise,
//           measurementNoise
//         );
//         const rotGamma = kalmanFilter(
//           gamma,
//           rotationEstimate.gamma,
//           rotationEstimateError.gamma,
//           processNoise,
//           measurementNoise
//         );

//         // Update state with filtered rotation data
//         setRotationEstimate({
//           alpha: rotAlpha.updatedEstimate,
//           beta: rotBeta.updatedEstimate,
//           gamma: rotGamma.updatedEstimate,
//         });
//         setRotationEstimateError({
//           alpha: rotAlpha.updatedEstimateError,
//           beta: rotBeta.updatedEstimateError,
//           gamma: rotGamma.updatedEstimateError,
//         });
//       };

//       const handleDeviceOrientation = (event) => {
//         const { alpha = 0, beta = 0, gamma = 0 } = event;

//         // Apply Kalman filter to magnetometer data
//         const magX = kalmanFilter(
//           alpha,
//           magnetEstimate.x,
//           magnetEstimateError.x,
//           processNoise,
//           measurementNoise
//         );
//         const magY = kalmanFilter(
//           beta,
//           magnetEstimate.y,
//           magnetEstimateError.y,
//           processNoise,
//           measurementNoise
//         );
//         const magZ = kalmanFilter(
//           gamma,
//           magnetEstimate.z,
//           magnetEstimateError.z,
//           processNoise,
//           measurementNoise
//         );

//         // Update state with filtered magnetometer data
//         setMagnetEstimate({
//           x: magX.updatedEstimate,
//           y: magY.updatedEstimate,
//           z: magZ.updatedEstimate,
//         });
//         setMagnetEstimateError({
//           x: magX.updatedEstimateError,
//           y: magY.updatedEstimateError,
//           z: magZ.updatedEstimateError,
//         });
//       };

//       // Start listening to the device motion event
//       window.addEventListener("devicemotion", handleDeviceMotion);
//       window.addEventListener("deviceorientation", handleDeviceOrientation);

//       // Cleanup event listeners when the component unmounts
//       return () => {
//         window.removeEventListener("devicemotion", handleDeviceMotion);
//         window.removeEventListener(
//           "deviceorientation",
//           handleDeviceOrientation
//         );
//       };
//     }
//   }, [isPermissionGranted, velocity, position]);

//   // Modal for permission request
//   const PermissionModal = () => (
//     <div style={styles.modal}>
//       <h3>IMU Sensor Permission</h3>
//       <p>
//         This app needs access to your device's sensors
//         (accelerometer/gyroscope/magnetometer) to track motion.
//       </p>
//       <button onClick={handlePermissionRequest}>Grant Permission</button>
//       <button onClick={() => setIsPermissionRequested(true)}>
//         Deny Permission
//       </button>
//     </div>
//   );

//   return (
//     <div>
//       <h2>IMU Tracking System</h2>

//       {/* Show permission modal if permission is not granted yet */}
//       {!isPermissionGranted && !isPermissionRequested && <PermissionModal />}

//       {/* Show message if permission is denied */}
//       {isPermissionRequested && !isPermissionGranted && (
//         <p>
//           Permission Denied. The app cannot track IMU data without permission.
//         </p>
//       )}

//       {/* Show IMU tracking data if permission is granted */}
//       {isPermissionGranted && (
//         <>
//           <h3>Accelerometer Data:</h3>
//           <p>X: {accelEstimate.x.toFixed(2)} m/s²</p>
//           <p>Y: {accelEstimate.y.toFixed(2)} m/s²</p>
//           <p>Z: {accelEstimate.z.toFixed(2)} m/s²</p>

//           <h3>Gyroscope Data:</h3>
//           <p>Alpha: {rotationEstimate.alpha.toFixed(2)}°</p>
//           <p>Beta: {rotationEstimate.beta.toFixed(2)}°</p>
//           <p>Gamma: {rotationEstimate.gamma.toFixed(2)}°</p>

//           <h3>Magnetometer Data:</h3>
//           <p>X: {magnetEstimate.x.toFixed(2)} µT</p>
//           <p>Y: {magnetEstimate.y.toFixed(2)} µT</p>
//           <p>Z: {magnetEstimate.z.toFixed(2)} µT</p>

//           <h3>Velocity:</h3>
//           <p>X: {velocity.x.toFixed(2)} m/s</p>
//           <p>Y: {velocity.y.toFixed(2)} m/s</p>
//           <p>Z: {velocity.z.toFixed(2)} m/s</p>

//           <h3>Position:</h3>
//           <p>X: {position.x.toFixed(2)} meters</p>
//           <p>Y: {position.y.toFixed(2)} meters</p>
//           <p>Z: {position.z.toFixed(2)} meters</p>
//         </>
//       )}
//     </div>
//   );
// };

// // Simple styles for the modal
// const styles = {
//   modal: {
//     position: "fixed",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     background: "white",
//     padding: "20px",
//     borderRadius: "5px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//     zIndex: 1000,
//   },
// };

// export default IMUTracking;

// Import required modules
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware to parse incoming request body
app.use(bodyParser.json());

// Kalman filter function
const kalmanFilter = (
  measurement,
  estimate,
  estimateError,
  processNoise,
  measurementNoise
) => {
  // Prediction
  const predictedEstimate = estimate;
  const predictedEstimateError = estimateError + processNoise;

  // Update
  const kalmanGain =
    predictedEstimateError / (predictedEstimateError + measurementNoise);
  const updatedEstimate =
    predictedEstimate + kalmanGain * (measurement - predictedEstimate);
  const updatedEstimateError = (1 - kalmanGain) * predictedEstimateError;

  return { updatedEstimate, updatedEstimateError };
};

// Constants for Kalman filter noise values
const processNoise = 0.001;
const measurementNoise = 0.1;

// Endpoint to handle incoming IMU data (sensor data)
app.post("/process-imu", (req, res) => {
  const { acceleration, rotationRate, alpha, beta, gamma } = req.body;

  // Default values if the data is missing
  const accelX = acceleration?.x || 0;
  const accelY = acceleration?.y || 0;
  const accelZ = acceleration?.z || 0;

  const rotAlpha = rotationRate?.alpha || 0;
  const rotBeta = rotationRate?.beta || 0;
  const rotGamma = rotationRate?.gamma || 0;

  // Example initial state estimates (you would typically store these)
  let accelEstimate = { x: 0, y: 0, z: 0 };
  let rotationEstimate = { alpha: 0, beta: 0, gamma: 0 };
  let velocity = { x: 0, y: 0, z: 0 };
  let position = { x: 0, y: 0, z: 0 };

  // Apply Kalman filter to accelerometer data
  const accelXFiltered = kalmanFilter(
    accelX,
    accelEstimate.x,
    1, // Assume initial error of 1 for simplicity
    processNoise,
    measurementNoise
  );
  const accelYFiltered = kalmanFilter(
    accelY,
    accelEstimate.y,
    1,
    processNoise,
    measurementNoise
  );
  const accelZFiltered = kalmanFilter(
    accelZ,
    accelEstimate.z,
    1,
    processNoise,
    measurementNoise
  );

  // Integrate acceleration to get velocity (Velocity = Acceleration * Time)
  // For this example, deltaTime = 1s (for simplicity)
  velocity.x += accelXFiltered.updatedEstimate;
  velocity.y += accelYFiltered.updatedEstimate;
  velocity.z += accelZFiltered.updatedEstimate;

  // Integrate velocity to get position (Position = Velocity * Time)
  position.x += velocity.x;
  position.y += velocity.y;
  position.z += velocity.z;

  // Apply Kalman filter to rotation data
  const rotAlphaFiltered = kalmanFilter(
    rotAlpha,
    rotationEstimate.alpha,
    1,
    processNoise,
    measurementNoise
  );
  const rotBetaFiltered = kalmanFilter(
    rotBeta,
    rotationEstimate.beta,
    1,
    processNoise,
    measurementNoise
  );
  const rotGammaFiltered = kalmanFilter(
    rotGamma,
    rotationEstimate.gamma,
    1,
    processNoise,
    measurementNoise
  );

  // Send the filtered results as a response
  res.json({
    accelEstimate: {
      x: accelXFiltered.updatedEstimate,
      y: accelYFiltered.updatedEstimate,
      z: accelZFiltered.updatedEstimate,
    },
    rotationEstimate: {
      alpha: rotAlphaFiltered.updatedEstimate,
      beta: rotBetaFiltered.updatedEstimate,
      gamma: rotGammaFiltered.updatedEstimate,
    },
    velocity: {
      x: velocity.x,
      y: velocity.y,
      z: velocity.z,
    },
    position: {
      x: position.x,
      y: position.y,
      z: position.z,
    },
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
