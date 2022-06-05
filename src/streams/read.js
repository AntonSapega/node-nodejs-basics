import { createReadStream } from "fs";
import { __dirname } from "../globalPath.js";

export const read = async () => {
  const readStream = createReadStream(
    `${__dirname(import.meta.url)}/files/fileToRead.txt`,
    "utf8"
  );
  readStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });
};

read();
