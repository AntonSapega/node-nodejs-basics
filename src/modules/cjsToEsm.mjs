import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import "./files/c.js";

import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const aJSON = JSON.parse(
  await readFile(new URL("./files/a.json", import.meta.url))
);
const bJSON = JSON.parse(
  await readFile(new URL("./files/b.json", import.meta.url))
);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = aJSON;
} else {
  unknownObject = bJSON;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

export { unknownObject, createMyServer };
