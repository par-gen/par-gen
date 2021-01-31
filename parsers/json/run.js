const buffer = new Uint8Array(131_071);

for (let i = 0; i < 131_071; i++) {
  buffer[i & 0x1ffff] = 0;
}
