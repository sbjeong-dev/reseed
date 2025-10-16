import type { NextConfig } from "next";
import * as path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  // 빌드 상태 표시기
  devIndicators: {
    buildActivity: false,
  },

  // sass 컴파일러
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

export default nextConfig;
