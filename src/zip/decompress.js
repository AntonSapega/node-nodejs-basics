import zlib from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";
import { __dirname } from "../globalPath.js";

export const decompress = async () => {
  const readStream = createReadStream(
    `${__dirname(import.meta.url)}/files/archive.gz`
  );
  const decompress = zlib.createUnzip();
  const writeStream = createWriteStream(
    `${__dirname(import.meta.url)}/files/fileToCompress.txt`
  );

  readStream.pipe(decompress).pipe(writeStream);
};

decompress();
