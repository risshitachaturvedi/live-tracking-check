//only granting permission
// import React, { useState, useEffect } from 'react'; // Import hooks
// import "tailwindcss";

// const SensorPermission = () => {
//   const [isPermissionGranted, setIsPermissionGranted] = useState(false);
//   const [sensorData, setSensorData] = useState({
//     accelerometer: null,
//     gyroscope: null,
//     magnetometer: null,
//   });
//   const [isDialogOpen, setIsDialogOpen] = useState(true);

//   // Function to request permission and access sensor data
//   const requestPermission = () => {
//     if (window.DeviceMotionEvent && window.DeviceOrientationEvent) {
//       // Check if the browser supports DeviceMotionEvent and DeviceOrientationEvent
//       setIsDialogOpen(false);
//       setIsPermissionGranted(true);
//       startSensorUpdates();
//     } else {
//       alert("Sensors are not supported on this device.");
//     }
//   };

//   // Function to start listening to the sensors
//   const startSensorUpdates = () => {
//     if (window.DeviceMotionEvent) {
//       // Listen to accelerometer and gyroscope data (DeviceMotion)
//       window.addEventListener("devicemotion", handleMotionEvent, true);
//     }

//     if (window.DeviceOrientationEvent) {
//       // Listen to device orientation data (for magnetometer)
//       window.addEventListener("deviceorientation", handleOrientationEvent, true);
//     }
//   };

//   // Function to handle accelerometer and gyroscope data
//   const handleMotionEvent = (event) => {
//     const acceleration = event.acceleration || {};
//     const rotationRate = event.rotationRate || {};
//     setSensorData((prevData) => ({
//       ...prevData,
//       accelerometer: acceleration,
//       gyroscope: rotationRate,
//     }));
//   };

//   // Function to handle magnetometer data (from device orientation)
//   const handleOrientationEvent = (event) => {
//     const { alpha, beta, gamma } = event;
//     setSensorData((prevData) => ({
//       ...prevData,
//       magnetometer: { alpha, beta, gamma },
//     }));
//   };

//   // Cleanup the listeners when component unmounts
//   useEffect(() => {
//     return () => {
//       if (window.DeviceMotionEvent) {
//         window.removeEventListener("devicemotion", handleMotionEvent);
//       }
//       if (window.DeviceOrientationEvent) {
//         window.removeEventListener("deviceorientation", handleOrientationEvent);
//       }
//     };
//   }, []);

//   return (
//     <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
//       {isDialogOpen && !isPermissionGranted && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-xl shadow-lg w-80">
//             <h2 className="text-xl font-bold mb-4">Permission Request</h2>
//             <p className="mb-4 text-gray-600">
//               This app needs permission to access your device's sensors (Accelerometer, Gyroscope, and Magnetometer).
//             </p>
//             <button
//               onClick={requestPermission}
//               className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
//             >
//               Grant Permission
//             </button>
//           </div>
//         </div>
//       )}
//       {isPermissionGranted && (
//         <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md mt-8">
//           <h1 className="text-2xl font-bold text-center mb-6">Sensor Data</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-gray-100 p-4 rounded-lg">
//               <h3 className="text-lg font-semibold">Accelerometer</h3>
//               <p>
//                 X: {sensorData.accelerometer?.x || "0.0"} <br />
//                 Y: {sensorData.accelerometer?.y || "0.0"} <br />
//                 Z: {sensorData.accelerometer?.z || "0.0"}
//               </p>
//             </div>

//             <div className="bg-gray-100 p-4 rounded-lg">
//               <h3 className="text-lg font-semibold">Gyroscope</h3>
//               <p>
//                 Alpha: {sensorData.gyroscope?.alpha || "0.0"} <br />
//                 Beta: {sensorData.gyroscope?.beta || "0.0"} <br />
//                 Gamma: {sensorData.gyroscope?.gamma || "0.0"}
//               </p>
//             </div>

//             <div className="bg-gray-100 p-4 rounded-lg col-span-2">
//               <h3 className="text-lg font-semibold">Magnetometer (Orientation)</h3>
//               <p>
//                 Alpha (Heading): {sensorData.magnetometer?.alpha || "0.0"} <br />
//                 Beta (Pitch): {sensorData.magnetometer?.beta || "0.0"} <br />
//                 Gamma (Roll): {sensorData.magnetometer?.gamma || "0.0"}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SensorPermission;


//sesnor infor of accelerometer, gyroscope, magnetometer, velocty and position
// import React, { useState, useEffect } from "react"; // Import hooks
// import "tailwindcss";

// const SensorPermission = () => {
//   const [isPermissionGranted, setIsPermissionGranted] = useState(false);
//   const [sensorData, setSensorData] = useState({
//     accelerometer: null,
//     gyroscope: null,
//     magnetometer: null,
//   });

//   const [velocity, setVelocity] = useState({ x: 0, y: 0, z: 0 });
//   const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

//   const [isDialogOpen, setIsDialogOpen] = useState(true);
//   const [lastTimestamp, setLastTimestamp] = useState(0);

//   // Function to request permission and access sensor data
//   const requestPermission = () => {
//     if (window.DeviceMotionEvent && window.DeviceOrientationEvent) {
//       // Check if the browser supports DeviceMotionEvent and DeviceOrientationEvent
//       setIsDialogOpen(false);
//       setIsPermissionGranted(true);
//       startSensorUpdates();
//     } else {
//       alert("Sensors are not supported on this device.");
//     }
//   };

//   // Function to start listening to the sensors
//   const startSensorUpdates = () => {
//     if (window.DeviceMotionEvent) {
//       // Listen to accelerometer and gyroscope data (DeviceMotion)
//       window.addEventListener("devicemotion", handleMotionEvent, true);
//     }

//     if (window.DeviceOrientationEvent) {
//       // Listen to device orientation data (for magnetometer)
//       window.addEventListener(
//         "deviceorientation",
//         handleOrientationEvent,
//         true
//       );
//     }
//   };

//   // Function to handle accelerometer and gyroscope data
//   const handleMotionEvent = (event) => {
//     const acceleration = event.acceleration || {};
//     const rotationRate = event.rotationRate || {};

//     // Get current timestamp
//     const timestamp = event.timeStamp;

//     // Calculate deltaTime (time difference between the last event and the current event)
//     const deltaTime = timestamp - lastTimestamp;
//     setLastTimestamp(timestamp);

//     // If deltaTime is too small, skip the calculations to avoid unnecessary updates
//     if (deltaTime <= 0) return;

//     // Update velocity and position based on the acceleration data
//     const newVelocity = {
//       x: velocity.x + ((acceleration.x || 0) * deltaTime) / 1000, // Convert ms to seconds
//       y: velocity.y + ((acceleration.y || 0) * deltaTime) / 1000,
//       z: velocity.z + ((acceleration.z || 0) * deltaTime) / 1000,
//     };

//     const newPosition = {
//       x: position.x + (newVelocity.x * deltaTime) / 1000, // Integrate velocity to get position
//       y: position.y + (newVelocity.y * deltaTime) / 1000,
//       z: position.z + (newVelocity.z * deltaTime) / 1000,
//     };

//     // Update state with new velocity and position
//     setVelocity(newVelocity);
//     setPosition(newPosition);

//     // Update sensor data
//     setSensorData((prevData) => ({
//       ...prevData,
//       accelerometer: acceleration,
//       gyroscope: rotationRate,
//     }));
//   };

//   // Function to handle magnetometer data (from device orientation)
//   const handleOrientationEvent = (event) => {
//     const { alpha, beta, gamma } = event;
//     setSensorData((prevData) => ({
//       ...prevData,
//       magnetometer: { alpha, beta, gamma },
//     }));
//   };

//   // Cleanup the listeners when component unmounts
//   useEffect(() => {
//     return () => {
//       if (window.DeviceMotionEvent) {
//         window.removeEventListener("devicemotion", handleMotionEvent);
//       }
//       if (window.DeviceOrientationEvent) {
//         window.removeEventListener("deviceorientation", handleOrientationEvent);
//       }
//     };
//   }, [lastTimestamp]);

//   return (
//     <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
//       {isDialogOpen && !isPermissionGranted && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-xl shadow-lg w-80">
//             <h2 className="text-xl font-bold mb-4">Permission Request</h2>
//             <p className="mb-4 text-gray-600">
//               This app needs permission to access your device's sensors
//               (Accelerometer, Gyroscope, and Magnetometer).
//             </p>
//             <button
//               onClick={requestPermission}
//               className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
//             >
//               Grant Permission
//             </button>
//           </div>
//         </div>
//       )}
//       {isPermissionGranted && (
//         <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md mt-8">
//           <h1 className="text-2xl font-bold text-center mb-6">Sensor Data</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="bg-gray-100 p-4 rounded-lg">
//               <h3 className="text-lg font-semibold">Accelerometer</h3>
//               <p>
//                 X: {sensorData.accelerometer?.x || "0.0"} <br />
//                 Y: {sensorData.accelerometer?.y || "0.0"} <br />
//                 Z: {sensorData.accelerometer?.z || "0.0"}
//               </p>
//             </div>

//             <div className="bg-gray-100 p-4 rounded-lg">
//               <h3 className="text-lg font-semibold">Gyroscope</h3>
//               <p>
//                 Alpha: {sensorData.gyroscope?.alpha || "0.0"} <br />
//                 Beta: {sensorData.gyroscope?.beta || "0.0"} <br />
//                 Gamma: {sensorData.gyroscope?.gamma || "0.0"}
//               </p>
//             </div>

//             <div className="bg-gray-100 p-4 rounded-lg col-span-2">
//               <h3 className="text-lg font-semibold">
//                 Magnetometer (Orientation)
//               </h3>
//               <p>
//                 Alpha (Heading): {sensorData.magnetometer?.alpha || "0.0"}{" "}
//                 <br />
//                 Beta (Pitch): {sensorData.magnetometer?.beta || "0.0"} <br />
//                 Gamma (Roll): {sensorData.magnetometer?.gamma || "0.0"}
//               </p>
//             </div>

//             <div className="bg-gray-100 p-4 rounded-lg col-span-2">
//               <h3 className="text-lg font-semibold">Velocity (m/s)</h3>
//               <p>
//                 X: {velocity.x.toFixed(2)} <br />
//                 Y: {velocity.y.toFixed(2)} <br />
//                 Z: {velocity.z.toFixed(2)}
//               </p>
//             </div>

//             <div className="bg-gray-100 p-4 rounded-lg col-span-2">
//               <h3 className="text-lg font-semibold">Position (m)</h3>
//               <p>
//                 X: {position.x.toFixed(2)} <br />
//                 Y: {position.y.toFixed(2)} <br />
//                 Z: {position.z.toFixed(2)}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SensorPermission;


//adding kalman filter
import React, { useState, useEffect } from "react"; // Import hooks
import "tailwindcss";

// Simple Kalman filter implementation
class KalmanFilter {
  constructor(processNoise = 1, measurementNoise = 10, estimatedError = 1) {
    this.processNoise = processNoise; // Process noise (uncertainty in the system)
    this.measurementNoise = measurementNoise; // Measurement noise (uncertainty in the sensor)
    this.estimatedError = estimatedError; // Initial estimation error

    this.value = 0; // Estimate of the state (initially set to 0)
    this.errorCovariance = 1; // Initial estimation error covariance
  }

  update(measurement) {
    // Prediction step
    const kalmanGain = this.errorCovariance / (this.errorCovariance + this.measurementNoise);
    this.value = this.value + kalmanGain * (measurement - this.value);
    this.errorCovariance = (1 - kalmanGain) * this.errorCovariance + this.processNoise;
    
    return this.value;
  }
}

const SensorPermission = () => {
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);
  const [sensorData, setSensorData] = useState({
    accelerometer: null,
    gyroscope: null,
    magnetometer: null,
  });

  const [velocity, setVelocity] = useState({ x: 0, y: 0, z: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

  const [isDialogOpen, setIsDialogOpen] = useState(true);
  const [lastTimestamp, setLastTimestamp] = useState(0);

  // Instantiate Kalman filters for each axis (x, y, z)
  const kalmanX = new KalmanFilter();
  const kalmanY = new KalmanFilter();
  const kalmanZ = new KalmanFilter();

  // Function to request permission and access sensor data
  const requestPermission = () => {
    if (window.DeviceMotionEvent && window.DeviceOrientationEvent) {
      // Check if the browser supports DeviceMotionEvent and DeviceOrientationEvent
      setIsDialogOpen(false);
      setIsPermissionGranted(true);
      startSensorUpdates();
    } else {
      alert("Sensors are not supported on this device.");
    }
  };

  // Function to start listening to the sensors
  const startSensorUpdates = () => {
    if (window.DeviceMotionEvent) {
      // Listen to accelerometer and gyroscope data (DeviceMotion)
      window.addEventListener("devicemotion", handleMotionEvent, true);
    }

    if (window.DeviceOrientationEvent) {
      // Listen to device orientation data (for magnetometer)
      window.addEventListener(
        "deviceorientation",
        handleOrientationEvent,
        true
      );
    }
  };

  // Function to handle accelerometer and gyroscope data
  const handleMotionEvent = (event) => {
    const acceleration = event.acceleration || {};
    const rotationRate = event.rotationRate || {};

    // Apply Kalman filter to the accelerometer data (smooth the readings)
    const filteredX = kalmanX.update(acceleration.x || 0);
    const filteredY = kalmanY.update(acceleration.y || 0);
    const filteredZ = kalmanZ.update(acceleration.z || 0);

    // Get current timestamp
    const timestamp = event.timeStamp;

    // Calculate deltaTime (time difference between the last event and the current event)
    const deltaTime = timestamp - lastTimestamp;
    setLastTimestamp(timestamp);

    // If deltaTime is too small, skip the calculations to avoid unnecessary updates
    if (deltaTime <= 0) return;

    // Update velocity and position based on the filtered acceleration data
    const newVelocity = {
      x: velocity.x + filteredX * deltaTime / 1000,  // Convert ms to seconds
      y: velocity.y + filteredY * deltaTime / 1000,
      z: velocity.z + filteredZ * deltaTime / 1000,
    };

    const newPosition = {
      x: position.x + newVelocity.x * deltaTime / 1000, // Integrate velocity to get position
      y: position.y + newVelocity.y * deltaTime / 1000,
      z: position.z + newVelocity.z * deltaTime / 1000,
    };

    // Update state with new velocity and position
    setVelocity(newVelocity);
    setPosition(newPosition);

    // Update sensor data
    setSensorData((prevData) => ({
      ...prevData,
      accelerometer: { x: filteredX, y: filteredY, z: filteredZ },
      gyroscope: rotationRate,
    }));
  };

  // Function to handle magnetometer data (from device orientation)
  const handleOrientationEvent = (event) => {
    const { alpha, beta, gamma } = event;
    setSensorData((prevData) => ({
      ...prevData,
      magnetometer: { alpha, beta, gamma },
    }));
  };

  // Cleanup the listeners when component unmounts
  useEffect(() => {
    return () => {
      if (window.DeviceMotionEvent) {
        window.removeEventListener("devicemotion", handleMotionEvent);
      }
      if (window.DeviceOrientationEvent) {
        window.removeEventListener("deviceorientation", handleOrientationEvent);
      }
    };
  }, [lastTimestamp]);

  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
      {isDialogOpen && !isPermissionGranted && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">Permission Request</h2>
            <p className="mb-4 text-gray-600">
              This app needs permission to access your device's sensors
              (Accelerometer, Gyroscope, and Magnetometer).
            </p>
            <button
              onClick={requestPermission}
              className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Grant Permission
            </button>
          </div>
        </div>
      )}
      {isPermissionGranted && (
        <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-md mt-8">
          <h1 className="text-2xl font-bold text-center mb-6">Sensor Data</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Accelerometer</h3>
              <p>
                X: {sensorData.accelerometer?.x || "0.0"} <br />
                Y: {sensorData.accelerometer?.y || "0.0"} <br />
                Z: {sensorData.accelerometer?.z || "0.0"}
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Gyroscope</h3>
              <p>
                Alpha: {sensorData.gyroscope?.alpha || "0.0"} <br />
                Beta: {sensorData.gyroscope?.beta || "0.0"} <br />
                Gamma: {sensorData.gyroscope?.gamma || "0.0"}
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg col-span-2">
              <h3 className="text-lg font-semibold">
                Magnetometer (Orientation)
              </h3>
              <p>
                Alpha (Heading): {sensorData.magnetometer?.alpha || "0.0"}{" "}
                <br />
                Beta (Pitch): {sensorData.magnetometer?.beta || "0.0"} <br />
                Gamma (Roll): {sensorData.magnetometer?.gamma || "0.0"}
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg col-span-2">
              <h3 className="text-lg font-semibold">Velocity (m/s)</h3>
              <p>
                X: {velocity.x.toFixed(2)} <br />
                Y: {velocity.y.toFixed(2)} <br />
                Z: {velocity.z.toFixed(2)}
              </p>
            </div>

            <div className="bg-gray-100 p-4 rounded-lg col-span-2">
              <h3 className="text-lg font-semibold">Position (m)</h3>
              <p>
                X: {position.x.toFixed(2)} <br />
                Y: {position.y.toFixed(2)} <br />
                Z: {position.z.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SensorPermission;
