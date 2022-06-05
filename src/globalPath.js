import { fileURLToPath } from "url";
import { dirname } from "path";

function __filename(metaUrl) {
  return fileURLToPath(metaUrl);
}

function __dirname(metaUrl) {
  const fileName = fileURLToPath(metaUrl);
  return dirname(fileName);
}

export { __filename, __dirname };
