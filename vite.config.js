import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build", // 빌드 결과물이 저장될 디렉토리 이름을 'build'로 설정
  },
});
