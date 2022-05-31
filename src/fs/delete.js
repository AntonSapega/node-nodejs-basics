import { unlink } from "fs";

export const remove = async () => {
  const targetPath = "./files/fileToRemove.txt";

  unlink(targetPath, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
};

remove();
