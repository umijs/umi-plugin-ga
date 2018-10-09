export default {
  plugins: [
    [
      "../../index.js",
      {
        code: "123",
        judge: () => window.location.hostname === 'preview.pro.ant.design'
      }
    ]
  ],
  singular: true
};
