import React from "react";

//import IMUTracking from "./components/IMUTracking";
import SensorPermission from "./components/SensorPermission";

function App() {
  const handlePermissionGranted = () => {
    console.log("Permission granted!");
  };

  return (
    <div>
      <SensorPermission onPermissionGranted={handlePermissionGranted} />
    </div>
  );
}

export default App;
