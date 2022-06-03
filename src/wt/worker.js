import { workerData, parentPort } from "worker_threads";

// n should be received from main thread
export const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
  // This function sends result of nthFibonacci computations to main thread
  const result = nthFibonacci(workerData);
  //! Just for an example!!!
  if (workerData === 11) {
    throw new Error("Something went wrong");
  } else {
    parentPort.postMessage(result);
  }
};

sendResult();
