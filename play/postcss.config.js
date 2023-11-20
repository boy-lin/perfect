module.exports = {
  plugins: {
    "@xianzhengquan/postcss-px-2-vw": {
      unitToConvert: "px",
      viewportWidth: 375,
      unitPrecision: 3,
      propList: ["*"], //, "!font-size", "!font"
      viewportUnit: "vw",
      fontViewportUnit: "vw",
      selectorBlackList: ["ignore-"],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [],
      landscape: true,
      landscapeUnit: "vw",
      landscapeWidth: 568,
    },
  },
};
