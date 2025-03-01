import { defineConfig } from "vite";
// import fs from "fs";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    https: false, //{
    //   key: fs.readFileSync("C:/Users/PP/Desktop/LiveTracking/key.pem"), // Replace with actual key path
    //   cert: fs.readFileSync("C:/Users/PP/Desktop/LiveTracking/cert.pem"), // Replace with actual cert path
    // },
    host: "0.0.0.0", // Local network access
    port: 5174,
  },
});
