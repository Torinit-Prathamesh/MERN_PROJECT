const path = require("path");

module.exports = {
  devServer: {
    port: 8080,
  },
  webpack: {
    alias: {
      "@src": path.resolve(__dirname, "src/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@icons": path.resolve(__dirname, "src/assets/icons"),
      "@components": path.resolve(
        __dirname,
        "src/components"
      ),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@layouts": path.resolve(
        __dirname,
        "src/components/layouts"
      ),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@containers": path.resolve(
        __dirname,
        "src/components/containers"
      ),
    },
  },
};