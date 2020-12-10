import {
  JavaScriptCommonJsCodegen,
  JavaScriptModuleCodegen,
} from "@knisterpeter/expound-codegen";

import { createGenerator } from "./generator.js";

describe("createGenerator", () => {
  it("should create a module generator", () => {
    const codegen = createGenerator("JavaScript", "ESM", {
      lexerFile: "lexerFile",
      parserFile: "parserFile",
    });

    expect(codegen).toBeInstanceOf(JavaScriptModuleCodegen);

    expect(codegen).toEqual(
      expect.objectContaining({
        options: {
          lexerFile: "lexerFile",
          parserFile: "parserFile",
        },
      })
    );
  });

  it("should create a commonjs generator", () => {
    const codegen = createGenerator("JavaScript", "cjs", {
      lexerFile: "lexerFile",
      parserFile: "parserFile",
    });

    expect(codegen).toBeInstanceOf(JavaScriptCommonJsCodegen);

    expect(codegen).toEqual(
      expect.objectContaining({
        options: {
          lexerFile: "lexerFile",
          parserFile: "parserFile",
        },
      })
    );
  });
});
