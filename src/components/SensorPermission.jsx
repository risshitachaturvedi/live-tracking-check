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

import { useEffect, useState } from "react";

const SensorPermission = () => {
  const [motionData, setMotionData] = useState(null);
  const [orientationData, setOrientationData] = useState(null);
  const [permissionStatus, setPermissionStatus] = useState("pending");

  useEffect(() => {
    const isAndroid = /Android/i.test(navigator.userAgent);

    if (!isAndroid) {
      setPermissionStatus("not-applicable");
      return;
    }

    const requestPermission = async () => {
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        // Explicitly request permission for Device Motion and Device Orientation
        try {
          const motionPermission = await DeviceMotionEvent.requestPermission();
          const orientationPermission =
            await DeviceOrientationEvent.requestPermission();

          console.log("Motion Permission:", motionPermission);
          console.log("Orientation Permission:", orientationPermission);

          if (
            motionPermission === "granted" &&
            orientationPermission === "granted"
          ) {
            setPermissionStatus("granted");
            // Add event listeners after permission is granted
            window.addEventListener("devicemotion", handleMotion);
            window.addEventListener("deviceorientation", handleOrientation);
          } else {
            setPermissionStatus("denied");
          }
        } catch (error) {
          console.error("Permission request failed:", error);
          setPermissionStatus("denied");
        }
      } else {
        // Non-iOS devices don’t need permission request
        setPermissionStatus("granted");
        window.addEventListener("devicemotion", handleMotion);
        window.addEventListener("deviceorientation", handleOrientation);
      }
    };

    // Permission Request Triggered by User Interaction
    const requestPermissionsOnClick = () => {
      setPermissionStatus("pending");
      requestPermission();
    };

    // Handle Motion Data
    const handleMotion = (event) => {
      if (event.acceleration) {
        setMotionData({
          acceleration: event.acceleration,
          rotationRate: event.rotationRate,
        });
      }
    };

    // Handle Orientation Data
    const handleOrientation = (event) => {
      setOrientationData({
        alpha: event.alpha,
        beta: event.beta,
        gamma: event.gamma,
      });
    };

    // Make sure the permission is requested by clicking a button
    return (
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold">Sensor Permissions</h2>
        {permissionStatus === "not-applicable" && (
          <p className="text-gray-500">
            This feature is only for Android web browsers.
          </p>
        )}
        {permissionStatus === "pending" && <p>Requesting permission...</p>}
        {permissionStatus === "denied" && (
          <p className="text-red-500">Permission Denied</p>
        )}
        {permissionStatus === "granted" && (
          <div>
            <h3 className="mt-4 font-semibold">Device Motion</h3>
            {motionData ? (
              <pre>{JSON.stringify(motionData, null, 2)}</pre>
            ) : (
              <p>No motion data</p>
            )}

            <h3 className="mt-4 font-semibold">Device Orientation</h3>
            {orientationData ? (
              <pre>{JSON.stringify(orientationData, null, 2)}</pre>
            ) : (
              <p>No orientation data</p>
            )}
          </div>
        )}
        {permissionStatus === "pending" && (
          <button
            onClick={requestPermissionsOnClick}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Grant Permissions
          </button>
        )}
      </div>
    );
  }, [permissionStatus]);

  return <div></div>;
};

export default SensorPermission;
