module.exports = function () {
  return require("../../scripts/jest-gen-parser.cjs")(
    __dirname,
    "json.pargen",
    "generated"
  );
};
