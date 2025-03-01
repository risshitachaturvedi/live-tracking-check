// import { useState, useEffect } from "react";
// import "tailwindcss";

// const SensorPermission = ({ onPermissionGranted }) => {
//   const [permission, setPermission] = useState(null); // Start with null

//   useEffect(() => {
//     if (
//       "DeviceMotionEvent" in window &&
//       typeof DeviceMotionEvent.requestPermission === "function"
//     ) {
//       setPermission(null); // Ensure state is not pre-set to denied
//     }
//   }, []);

//   const requestPermission = async () => {
//     const response = await DeviceMotionEvent.requestPermission();
//     if (response === "granted") {
//       setPermission("granted");
//       onPermissionGranted();
//     } else {
//       setPermission("denied");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       {permission === null && (
//         <button
//           onClick={requestPermission}
//           className="px-4 py-2 bg-blue-500 text-white rounded"
//         >
//           Allow Sensor Access
//         </button>
//       )}
//       {permission === "denied" && (
//         <div className="text-center">
//           <p className="text-red-500 mb-4">
//             Permission denied. Please allow sensor access.
//           </p>
//           <button
//             onClick={requestPermission}
//             className="px-4 py-2 bg-blue-500 text-white rounded"
//           >
//             Try Again
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SensorPermission;

// import { useState, useEffect } from "react";
// import "tailwindcss";

// const SensorPermission = ({ onPermissionGranted }) => {
//   const [permission, setPermission] = useState(null); // Start with null
//   const [showDialog, setShowDialog] = useState(false); // To toggle dialog visibility

//   useEffect(() => {
//     if (
//       "DeviceMotionEvent" in window &&
//       typeof DeviceMotionEvent.requestPermission === "function"
//     ) {
//       setPermission(null); // Ensure state is not pre-set to denied
//     }
//   }, []);

//   const requestPermission = async () => {
//     const response = await DeviceMotionEvent.requestPermission();
//     if (response === "granted") {
//       setPermission("granted");
//       onPermissionGranted();
//     } else {
//       setPermission("denied");
//     }
//   };

//   const handleYesClick = () => {
//     setShowDialog(false);
//     requestPermission(); // Trigger permission request after user agrees
//   };

//   const handleNoClick = () => {
//     setShowDialog(false);
//     // Show try again button after denying
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       {permission === null && showDialog && (
//         <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg w-80 text-center">
//             <p className="mb-4 text-gray-700">
//               This permission is needed to access your phone's sensors. If you
//               grant access, you will be directed to the map. Do you want to
//               proceed?
//             </p>
//             <div className="flex justify-around">
//               <button
//                 onClick={handleYesClick}
//                 className="px-4 py-2 bg-green-500 text-white rounded"
//               >
//                 Yes
//               </button>
//               <button
//                 onClick={handleNoClick}
//                 className="px-4 py-2 bg-red-500 text-white rounded"
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Display response message */}
//       {/* {responseMessage && (
//         <div className="text-center mb-4">
//           <p className="text-lg">{responseMessage}</p>
//         </div>
//       )} */}

//       {permission === "denied" && (
//         <div className="text-center">
//           <p className="text-red-500 mb-4">
//             Permission denied. Please allow sensor access.
//           </p>
//           <button
//             onClick={() => setShowDialog(true)} // Show dialog to try again
//             className="px-4 py-2 bg-blue-500 text-white rounded"
//           >
//             Try Again
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SensorPermission;

// import { useState, useEffect } from "react";
// import "tailwindcss";

// const SensorPermission = ({ onPermissionGranted }) => {
//   const [permission, setPermission] = useState(null); // Start with null
//   const [showDialog, setShowDialog] = useState(true); // Initially set to true

//   useEffect(() => {
//     if (
//       "DeviceMotionEvent" in window &&
//       typeof DeviceMotionEvent.requestPermission === "function"
//     ) {
//       console.log("DeviceMotionEvent is supported, checking permission...");
//       setPermission(null); // Ensure state is not pre-set to denied
//     } else {
//       console.log(
//         "DeviceMotionEvent is not supported or not available in this browser"
//       );
//       setPermission("denied"); // Fallback to denied if not supported
//     }
//   }, []);

//   const requestPermission = async () => {
//     try {
//       const response = await DeviceMotionEvent.requestPermission();
//       console.log("Permission response:", response); // Log the response
//       if (response === "granted") {
//         setPermission("granted");
//         onPermissionGranted();
//       } else {
//         setPermission("denied");
//       }
//     } catch (error) {
//       console.error("Error requesting permission:", error);
//       setPermission("denied");
//     }
//   };

//   const handleYesClick = () => {
//     setShowDialog(false);
//     requestPermission(); // Trigger permission request after user agrees
//   };

//   const handleNoClick = () => {
//     setShowDialog(false);
//     // Show try again button after denying
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       {permission === null && showDialog && (
//         <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg w-80 text-center">
//             <p className="mb-4 text-gray-700">
//               This permission is needed to access your phone's sensors. If you
//               grant access, you will be directed to the map. Do you want to
//               proceed?
//             </p>
//             <div className="flex justify-around">
//               <button
//                 onClick={handleYesClick}
//                 className="px-4 py-2 bg-green-500 text-white rounded"
//               >
//                 Yes
//               </button>
//               <button
//                 onClick={handleNoClick}
//                 className="px-4 py-2 bg-red-500 text-white rounded"
//               >
//                 No
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {permission === "denied" && (
//         <div className="text-center">
//           <p className="text-red-500 mb-4">
//             Permission denied. Please allow sensor access.
//           </p>
//           <button
//             onClick={() => setShowDialog(true)} // Show dialog to try again
//             className="px-4 py-2 bg-blue-500 text-white rounded"
//           >
//             Try Again
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SensorPermission;

// import { useEffect, useState } from "react";

// const SensorPermission = () => {
//   const [motionData, setMotionData] = useState(null);
//   const [orientationData, setOrientationData] = useState(null);
//   const [permissionStatus, setPermissionStatus] = useState("pending");

//   useEffect(() => {
//     const isAndroid = /Android/i.test(navigator.userAgent);

//     if (!isAndroid) {
//       setPermissionStatus("not-applicable");
//       return;
//     }

//     const requestPermission = async () => {
//       if (typeof DeviceMotionEvent.requestPermission === "function") {
//         try {
//           const motionPermission = await DeviceMotionEvent.requestPermission();
//           const orientationPermission =
//             await DeviceOrientationEvent.requestPermission();

//           if (
//             motionPermission === "granted" &&
//             orientationPermission === "granted"
//           ) {
//             setPermissionStatus("granted");
//             window.addEventListener("devicemotion", handleMotion);
//             window.addEventListener("deviceorientation", handleOrientation);
//           } else {
//             setPermissionStatus("denied");
//           }
//         } catch (error) {
//           setPermissionStatus("denied");
//         }
//       } else {
//         // Non-iOS devices don't need permission request
//         setPermissionStatus("granted");
//         window.addEventListener("devicemotion", handleMotion);
//         window.addEventListener("deviceorientation", handleOrientation);
//       }
//     };

//     const handleMotion = (event) => {
//       setMotionData({
//         acceleration: event.acceleration,
//         rotationRate: event.rotationRate,
//       });
//     };

//     const handleOrientation = (event) => {
//       setOrientationData({
//         alpha: event.alpha,
//         beta: event.beta,
//         gamma: event.gamma,
//       });
//     };

//     requestPermission();

//     return () => {
//       window.removeEventListener("devicemotion", handleMotion);
//       window.removeEventListener("deviceorientation", handleOrientation);
//     };
//   }, []);

//   return (
//     <div className="p-4 text-center">
//       <h2 className="text-xl font-bold">Sensor Permissions</h2>
//       {permissionStatus === "not-applicable" && (
//         <p className="text-gray-500">
//           This feature is only for Android web browsers.
//         </p>
//       )}
//       {permissionStatus === "pending" && <p>Requesting permission...</p>}
//       {permissionStatus === "denied" && (
//         <p className="text-red-500">Permission Denied</p>
//       )}
//       {permissionStatus === "granted" && (
//         <div>
//           <h3 className="mt-4 font-semibold">Device Motion</h3>
//           {motionData ? (
//             <pre>{JSON.stringify(motionData, null, 2)}</pre>
//           ) : (
//             <p>No motion data</p>
//           )}

//           <h3 className="mt-4 font-semibold">Device Orientation</h3>
//           {orientationData ? (
//             <pre>{JSON.stringify(orientationData, null, 2)}</pre>
//           ) : (
//             <p>No orientation data</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SensorPermission;

import React, { useState, useEffect } from "react"; // Import hooks
import "tailwindcss";

const SensorPermission = () => {
  const [isPermissionGranted, setIsPermissionGranted] = useState(false);
  const [sensorData, setSensorData] = useState({
    accelerometer: null,
    gyroscope: null,
    magnetometer: null,
  });
  const [isDialogOpen, setIsDialogOpen] = useState(true);

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
    setSensorData((prevData) => ({
      ...prevData,
      accelerometer: acceleration,
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
  }, []);

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
          </div>
        </div>
      )}
    </div>
  );
};

export default SensorPermission;
