import { fork } from "child_process";

export const spawnChildProcess = async (args) => {
  fork("./files/script.js", args);
};

const envArguments = process.argv;
spawnChildProcess(envArguments);
