import zlib from "node:zlib";
import { createReadStream, createWriteStream } from "node:fs";

export const decompress = async () => {
  const readStream = createReadStream("./files/archive.gz");
  const decompress = zlib.createUnzip();
  const writeStream = createWriteStream("./files/fileToCompress.txt");

  readStream.pipe(decompress).pipe(writeStream);
};

decompress();
