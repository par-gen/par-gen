const { performance } = require("perf_hooks");
const fs = require("fs");
const loader = require("@assemblyscript/loader");

const { exports: assemblyscript } = loader.instantiateSync(
  fs.readFileSync(__dirname + "/04-assemblyscript.wasm"),
  {}
);

const { exports: clang } = new WebAssembly.Instance(
  new WebAssembly.Module(fs.readFileSync(__dirname + "/04-webassembly.wasm")),
  {}
);

const expr = "ab(c|d)(e|f)*((gh|ij)(kl|mn))*";
const string = "abcffghmnijmn";
const input = new TextEncoder().encode(string);
const regexp = new RegExp("ab(?:c|d)(?:e|f)*(?:(?:gh|ij)(?:kl|mn))*");
const iterations = 25_000_000;

const table = new Uint16Array(2816).fill(10);

table[97] = 2560;
table[98] = 2560;
table[99] = 2560;
table[100] = 2560;
table[101] = 0;
table[102] = 0;
table[103] = 2048;
table[104] = 2560;
table[105] = 2304;
table[106] = 2560;
table[107] = 2560;
table[108] = 2560;
table[109] = 2560;
table[110] = 2560;
table[353] = 2560;
table[354] = 2560;
table[355] = 2560;
table[356] = 2560;
table[357] = 2560;
table[358] = 2560;
table[359] = 2048;
table[360] = 2560;
table[361] = 2304;
table[362] = 2560;
table[363] = 2560;
table[364] = 2560;
table[365] = 2560;
table[366] = 2560;
table[609] = 2560;
table[610] = 2560;
table[611] = 0;
table[612] = 0;
table[613] = 2560;
table[614] = 2560;
table[615] = 2560;
table[616] = 2560;
table[617] = 2560;
table[618] = 2560;
table[619] = 2560;
table[620] = 2560;
table[621] = 2560;
table[622] = 2560;
table[865] = 2560;
table[866] = 2560;
table[867] = 2560;
table[868] = 2560;
table[869] = 2560;
table[870] = 2560;
table[871] = 2560;
table[872] = 2560;
table[873] = 2560;
table[874] = 2560;
table[875] = 2560;
table[876] = 256;
table[877] = 2560;
table[878] = 2560;
table[1121] = 2560;
table[1122] = 2560;
table[1123] = 2560;
table[1124] = 2560;
table[1125] = 2560;
table[1126] = 2560;
table[1127] = 2560;
table[1128] = 2560;
table[1129] = 2560;
table[1130] = 2560;
table[1131] = 2560;
table[1132] = 2560;
table[1133] = 2560;
table[1134] = 256;
table[1377] = 2560;
table[1378] = 512;
table[1379] = 2560;
table[1380] = 2560;
table[1381] = 2560;
table[1382] = 2560;
table[1383] = 2560;
table[1384] = 2560;
table[1385] = 2560;
table[1386] = 2560;
table[1387] = 2560;
table[1388] = 2560;
table[1389] = 2560;
table[1390] = 2560;
table[1633] = 2560;
table[1634] = 2560;
table[1635] = 2560;
table[1636] = 2560;
table[1637] = 2560;
table[1638] = 2560;
table[1639] = 2560;
table[1640] = 2560;
table[1641] = 2560;
table[1642] = 2560;
table[1643] = 768;
table[1644] = 2560;
table[1645] = 1024;
table[1646] = 2560;
table[1889] = 1280;
table[1890] = 2560;
table[1891] = 2560;
table[1892] = 2560;
table[1893] = 2560;
table[1894] = 2560;
table[1895] = 2560;
table[1896] = 2560;
table[1897] = 2560;
table[1898] = 2560;
table[1899] = 2560;
table[1900] = 2560;
table[1901] = 2560;
table[1902] = 2560;
table[2145] = 2560;
table[2146] = 2560;
table[2147] = 2560;
table[2148] = 2560;
table[2149] = 2560;
table[2150] = 2560;
table[2151] = 2560;
table[2152] = 1536;
table[2153] = 2560;
table[2154] = 2560;
table[2155] = 2560;
table[2156] = 2560;
table[2157] = 2560;
table[2158] = 2560;
table[2401] = 2560;
table[2402] = 2560;
table[2403] = 2560;
table[2404] = 2560;
table[2405] = 2560;
table[2406] = 2560;
table[2407] = 2560;
table[2408] = 2560;
table[2409] = 2560;
table[2410] = 1536;
table[2411] = 2560;
table[2412] = 2560;
table[2413] = 2560;
table[2414] = 2560;
table[2657] = 2560;
table[2658] = 2560;
table[2659] = 2560;
table[2660] = 2560;
table[2661] = 2560;
table[2662] = 2560;
table[2663] = 2560;
table[2664] = 2560;
table[2665] = 2560;
table[2666] = 2560;
table[2667] = 2560;
table[2668] = 2560;
table[2669] = 2560;
table[2670] = 2560;

const dfa = (input) => {
  let state = 1792;
  for (let i = 0, l = input.length; i < l; i++) {
    state = table[state + input[i]];
  }
  return 0 === state || 256 === state;
};

{
  // make the function hot
  for (let i = 0; i < 1_000; i++) {
    dfa(input);
  }

  const start = performance.now();

  for (let i = 0; i < iterations; i++) {
    dfa(input);
  }

  console.log(
    `${iterations.toLocaleString()} iterations of dfa (JS) took ${(
      performance.now() - start
    ).toFixed(2)} ms`
  );
}

{
  const start = performance.now();

  for (let i = 0; i < iterations; i++) {
    assemblyscript.dfa();
  }

  console.log(
    `${iterations.toLocaleString()} iterations of AssemblyScript took ${(
      performance.now() - start
    ).toFixed(2)} ms`
  );
}

{
  const start = performance.now();

  for (let i = 0; i < iterations; i++) {
    clang.dfa();
  }

  console.log(
    `${iterations.toLocaleString()} iterations of clang WebAssembly took ${(
      performance.now() - start
    ).toFixed(2)} ms`
  );
}

{
  // make the expr hot
  for (let i = 0; i < 1_000; i++) {
    regexp.test(string);
  }

  const start = performance.now();

  for (let i = 0; i < iterations; i++) {
    regexp.test(string);
  }

  console.log(
    `${iterations.toLocaleString()} iterations of RegExp took ${(
      performance.now() - start
    ).toFixed(2)} ms`
  );
}
