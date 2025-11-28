const sleep = (delay) =>
  new Promise((resolve) =>
    setTimeout(() => {
      console.log("I'm sleeping for 2 seconds.");
      resolve();
    }, delay)
  );

await sleep(2000);

setTimeout(() => {
  console.log("I've been waiting for 2 seconds.");
}, 2000);
