import { stdin, stdout } from "process";
import { Transform } from "stream";

export const transform = async () => {
  const transformStream = new Transform();
  transformStream._transform = (chunk, encoding, callback) => {
    transformStream.push(chunk.reverse() + "\n");
    callback();
  };
  stdin.pipe(transformStream).pipe(stdout);
};

transform();
