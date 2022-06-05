import { stat, writeFile } from "fs";
import { __dirname } from "../globalPath.js";

export const create = async () => {
  const newFileName = "fresh.txt";
  const fullPath = `${__dirname(import.meta.url)}/files/${newFileName}`;
  const fileContent = "I am fresh and young";

  stat(fullPath, (err, stats) => {
    if (!stats) {
      writeFile(fullPath, fileContent, () => {});
    } else {
      throw Error("FS operation failed");
    }
  });
};

create();
