export default {
  plugins: [
    [
      "../../index.js",
      {
        code: "123",
        judge: () => process.env.NODE_ENV !== "production"
      }
    ]
  ],
  singular: true
};
