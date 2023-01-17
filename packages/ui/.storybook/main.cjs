const { vanillaExtractPlugin } = require("@vanilla-extract/vite-plugin");
module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  features: {
    interactionsDebugger: true,
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
      plugins: [...config.plugins, vanillaExtractPlugin()],
      // resolve: {
      //   alias: [
      //     {
      //       find: "ui",
      //       replacement: path.resolve(
      //         __dirname,
      //         "../../../packages/ui/"
      //       ),
      //     },
      //   ],
    };
  },

  docs: {
    autodocs: true,
  },
};
