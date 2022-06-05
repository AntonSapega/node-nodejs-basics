import { rename } from "fs";
import { __dirname } from "../globalPath.js";

export const fileRename = async () => {
  const sourcePath = `${__dirname(import.meta.url)}/files`;
  const targetFile = "wrongFilename.txt";
  const finalFileName = "properFilename.md";

  rename(
    `${sourcePath}/${targetFile}`,
    `${sourcePath}/${finalFileName}`,
    (err) => {
      if (err) {
        throw new Error("FS operation failed");
      }
    }
  );
};

fileRename();
