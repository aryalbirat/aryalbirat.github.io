import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // 👈 Ensures correct asset paths for GitHub Pages
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
