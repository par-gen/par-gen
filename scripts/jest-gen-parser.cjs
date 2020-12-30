const { exec } = require("child_process");
const { join } = require("path");

/**
 * @param {string} cwd
 * @param {string} grammarFile
 * @param {string} outputFolder
 */
module.exports = function (cwd, grammarFile, outputFolder) {
  return new Promise((resolve, reject) => {
    const cmd = `${join(
      __dirname,
      "../node_modules/.bin/par-gen"
    )} codegen ${grammarFile} ${outputFolder}`;

    const child = exec(cmd, {
      cwd,
    });

    child.on("exit", (code) => (code > 0 ? reject : resolve)(code));
  });
};
