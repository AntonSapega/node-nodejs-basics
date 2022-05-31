import { readFile } from "fs";

export const read = async () => {
  const path = "./files/fileToRead.txt";

  readFile(path, "utf8", (err, data) => {
    if (err) {
      throw new Error("FS operation failed");
    }
    console.log(data);
  });
};

read();
