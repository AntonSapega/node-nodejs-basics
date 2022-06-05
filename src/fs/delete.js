import { unlink } from "fs";
import { __dirname } from "../globalPath.js";

export const remove = async () => {
  const targetPath = `${__dirname(import.meta.url)}/files/fileToRemove.txt`;

  unlink(targetPath, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
};

remove();
