import { createWriteStream } from "fs";
import { __dirname } from "../globalPath.js";

export const write = async () => {
  const writeStream = createWriteStream(
    `${__dirname(import.meta.url)}/files/fileToWrite.txt`
  );

  process.stdin.on("data", (data) => {
    writeStream.write(data);
  });
};

write();
