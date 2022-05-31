import { readdir, copyFile, mkdir, stat } from "fs";

export const copy = async () => {
  const sourcePath = "./files";
  const copy = "./files_copy";

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
      copyFile(`${sourcePath}/${file}`, `./${copy}/${file}`, () => {});
    });
  });
};

copy();
