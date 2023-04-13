import log from './logger';
log('hello');

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function main() {
  log('start');
  await sleep(1000);
  log('end');
}

main();
