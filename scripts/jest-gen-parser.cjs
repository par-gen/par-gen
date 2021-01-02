const { exec } = require("child_process");
const { join } = require("path");
const { promises: fsp, Stats } = require("fs");
const globby = require("globby");

/**
 * @param {string[]} files
 * @returns {Stats[]}
 */
async function getStats(files) {
  return await Promise.all(files.map(async (file) => await fsp.stat(file)));
}

/**
 * @param {Stats[]} inputs
 * @param {Stats[]} outputs
 */
function requireRebuild(inputs, outputs) {
  return inputs.some((input) =>
    outputs.some((output) => input.mtime > output.mtime)
  );
}

/**
 * @param {string} cwd
 * @param {string} grammarFile
 * @param {string} outputFolder
 */
module.exports = function (cwd, grammarFile, outputFolder) {
  return new Promise(async (resolve, reject) => {
    const outputFiles = await globby(`${join(cwd, outputFolder)}/**`, {
      absolute: true,
    });
    const outputFileStats = await getStats(outputFiles);

    const inputFiles = await globby(
      [
        join(cwd, grammarFile),
        `${join(__dirname, "../packages")}/**/lib/**/*.js`,
      ],
      {
        absolute: true,
        ignore: ["**/node_modules/**", "**/*.test.js"],
      }
    );
    const inputStats = await getStats(inputFiles);

    if (!requireRebuild(inputStats, outputFileStats)) {
      return resolve(0);
    }

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
