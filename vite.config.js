import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/live-tracking-check/",
  server: {
    host: "0.0.0.0", // Local network access
    port: 5174,
  },
});
