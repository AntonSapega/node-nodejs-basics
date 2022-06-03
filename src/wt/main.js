import { cpus } from "os";
import { Worker } from "worker_threads";

export const performCalculations = async () => {
  const coresAmount = cpus().length;
  const startNumber = 10;
  let results = null;
  const workers = openWorkers(startNumber, coresAmount + startNumber);

  await Promise.allSettled(workers).then((arr) => {
    results = handleWorkerResponse(arr);
  });
  return results;
};

function openWorkers(initialValue, limit) {
  const workers = [];

  for (let i = initialValue; i < limit; i++) {
    const worker = new Worker("./worker.js", { workerData: i });
    const workerPromise = new Promise((resolve, reject) => {
      worker.on("message", (msg) => {
        resolve(msg);
      });
      worker.on("error", (err) => reject(err));
    });

    workers.push(workerPromise);
  }

  return workers;
}

function handleWorkerResponse(dataArr) {
  return dataArr.map((obj) => {
    if (obj.status === "fulfilled") {
      return {
        status: "resolved",
        data: obj.value,
      };
    } else {
      return {
        status: "error",
        data: null,
      };
    }
  });
}

console.log(await performCalculations());
