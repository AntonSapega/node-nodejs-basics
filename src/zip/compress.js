import { createReadStream, createWriteStream } from "fs";
import zlib from "zlib";

export const compress = async () => {
  const readStream = createReadStream("./files/fileToCompress.txt", "utf8");
  const writeStream = createWriteStream("./files/archive.gz");
  const compressStream = zlib.createGzip();

  readStream.pipe(compressStream).pipe(writeStream);
};

compress();
