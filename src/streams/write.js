import { createWriteStream } from "fs";

export const write = async () => {
  const writeStream = createWriteStream("./files/fileToWrite.txt");

  process.stdin.on("data", (data) => {
    writeStream.write(data);
  });
};

write();
