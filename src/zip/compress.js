import { createReadStream, createWriteStream } from "fs";
import zlib from "zlib";
import { __dirname } from "../globalPath.js";

export const compress = async () => {
  const readStream = createReadStream(
    `${__dirname(import.meta.url)}/files/fileToCompress.txt`,
    "utf8"
  );
  const writeStream = createWriteStream(
    `${__dirname(import.meta.url)}/files/archive.gz`
  );
  const compressStream = zlib.createGzip();

  readStream.pipe(compressStream).pipe(writeStream);
};

compress();
