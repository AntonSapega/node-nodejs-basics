import { stat, writeFile } from "fs";

export const create = async () => {
  const newFileName = "fresh.txt";
  const fullPath = `./files/${newFileName}`;
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
