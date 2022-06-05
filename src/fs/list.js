import { readdir } from "fs";
import { __dirname } from "../globalPath.js";

export const list = async () => {
  const sourcePath = `${__dirname(import.meta.url)}/files`;

  readdir(sourcePath, (err, files) => {
    if (err) {
      throw new Error("FS operation failed");
    }
    files.forEach((file) => console.log(file));
  });
};

list();
