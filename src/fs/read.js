import { readFile } from "fs";
import { __dirname } from "../globalPath.js";

export const read = async () => {
  const path = `${__dirname(import.meta.url)}/files/fileToRead.txt`;

  readFile(path, "utf8", (err, data) => {
    if (err) {
      throw new Error("FS operation failed");
    }
    console.log(data);
  });
};

read();
