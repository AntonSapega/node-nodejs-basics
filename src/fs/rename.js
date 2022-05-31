import { rename } from "fs";

export const fileRename = async () => {
  const sourcePath = "./files";
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
