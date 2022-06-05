import { readdir, copyFile, mkdir } from "fs";
import { __dirname } from "../globalPath.js";

export const copy = async () => {
  const sourcePath = `${__dirname(import.meta.url)}/files`;
  const copy = `${__dirname(import.meta.url)}/files_copy`;

  readdir(sourcePath, (err, files) => {
    if (err) {
      throw new Error("FS operation failed");
    }
    mkdir(copy, (err) => {
      if (err) {
        throw new Error("FS operation failed");
      }
    });
    files.forEach((file) => {
      copyFile(`${sourcePath}/${file}`, `${copy}/${file}`, () => {});
    });
  });
};

copy();
