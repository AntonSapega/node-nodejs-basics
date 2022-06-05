import { readFileSync } from "fs";
import crypto from "crypto";
import { __dirname } from "../globalPath.js";

export const calculateHash = async () => {
  const sourcePath = `${__dirname(
    import.meta.url
  )}/files/fileToCalculateHashFor.txt`;

  const data = readFileSync(sourcePath, "utf8");
  return crypto.createHash("sha256").update(data).digest("hex");
};

async function printHash() {
  const hash = await calculateHash();
  console.log(hash);
}

printHash();
