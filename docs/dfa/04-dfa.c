const int table[2816] = {[97] = 2560, [98] = 2560, [99] = 2560, [100] = 2560, [101] = 0, [102] = 0, [103] = 2048, [104] = 2560, [105] = 2304, [106] = 2560, [107] = 2560, [108] = 2560, [109] = 2560, [110] = 2560, [353] = 2560, [354] = 2560, [355] = 2560, [356] = 2560, [357] = 2560, [358] = 2560, [359] = 2048, [360] = 2560, [361] = 2304, [362] = 2560, [363] = 2560, [364] = 2560, [365] = 2560, [366] = 2560, [609] = 2560, [610] = 2560, [611] = 0, [612] = 0, [613] = 2560, [614] = 2560, [615] = 2560, [616] = 2560, [617] = 2560, [618] = 2560, [619] = 2560, [620] = 2560, [621] = 2560, [622] = 2560, [865] = 2560, [866] = 2560, [867] = 2560, [868] = 2560, [869] = 2560, [870] = 2560, [871] = 2560, [872] = 2560, [873] = 2560, [874] = 2560, [875] = 2560, [876] = 256, [877] = 2560, [878] = 2560, [1121] = 2560, [1122] = 2560, [1123] = 2560, [1124] = 2560, [1125] = 2560, [1126] = 2560, [1127] = 2560, [1128] = 2560, [1129] = 2560, [1130] = 2560, [1131] = 2560, [1132] = 2560, [1133] = 2560, [1134] = 256, [1377] = 2560, [1378] = 512, [1379] = 2560, [1380] = 2560, [1381] = 2560, [1382] = 2560, [1383] = 2560, [1384] = 2560, [1385] = 2560, [1386] = 2560, [1387] = 2560, [1388] = 2560, [1389] = 2560, [1390] = 2560, [1633] = 2560, [1634] = 2560, [1635] = 2560, [1636] = 2560, [1637] = 2560, [1638] = 2560, [1639] = 2560, [1640] = 2560, [1641] = 2560, [1642] = 2560, [1643] = 768, [1644] = 2560, [1645] = 1024, [1646] = 2560, [1889] = 1280, [1890] = 2560, [1891] = 2560, [1892] = 2560, [1893] = 2560, [1894] = 2560, [1895] = 2560, [1896] = 2560, [1897] = 2560, [1898] = 2560, [1899] = 2560, [1900] = 2560, [1901] = 2560, [1902] = 2560, [2145] = 2560, [2146] = 2560, [2147] = 2560, [2148] = 2560, [2149] = 2560, [2150] = 2560, [2151] = 2560, [2152] = 1536, [2153] = 2560, [2154] = 2560, [2155] = 2560, [2156] = 2560, [2157] = 2560, [2158] = 2560, [2401] = 2560, [2402] = 2560, [2403] = 2560, [2404] = 2560, [2405] = 2560, [2406] = 2560, [2407] = 2560, [2408] = 2560, [2409] = 2560, [2410] = 1536, [2411] = 2560, [2412] = 2560, [2413] = 2560, [2414] = 2560, [2657] = 2560, [2658] = 2560, [2659] = 2560, [2660] = 2560, [2661] = 2560, [2662] = 2560, [2663] = 2560, [2664] = 2560, [2665] = 2560, [2666] = 2560, [2667] = 2560, [2668] = 2560, [2669] = 2560, [2670] = 2560};

int _dfa(int input[], int size)
{
  int state = 1792;
  for (int i = 0; i < size; i++)
  {
    state = table[state + input[i]];
  }
  return state == 0 || state == 256;
}