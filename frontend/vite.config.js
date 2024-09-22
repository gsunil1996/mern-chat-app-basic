import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target:
          import.meta.env.MODE === "development"
            ? "http://localhost:5000"
            : "https://mern-chat-app-zyhy.onrender.com",
      },
    },
  },
});
