import { fork } from "child_process";
import { __dirname } from "../globalPath.js";

export const spawnChildProcess = async (args) => {
  fork(`${__dirname(import.meta.url)}/files/script.js`, args);
};

const envArguments = process.argv;
spawnChildProcess(envArguments);
