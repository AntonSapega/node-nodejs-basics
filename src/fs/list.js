import { readdir } from "fs";

export const list = async () => {
  const sourcePath = "./files";

  readdir(sourcePath, (err, files) => {
    if (err) {
      throw new Error("FS operation failed");
    }
    files.forEach((file) => console.log(file));
  });
};

list();
