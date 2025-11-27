import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Tên repository của bạn: react-tailwindcss
const repoName = "react-tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  // THÊM THUỘC TÍNH BASE NÀY:
  base: `/${repoName}/`,
  plugins: [react()],
});
