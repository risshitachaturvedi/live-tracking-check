import { defineConfig } from "vite";
// import fs from "fs";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/live-tracking-check",
  server: {
    host: "0.0.0.0", // Local network access
    port: 5174,
  },
});
