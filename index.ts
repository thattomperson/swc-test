console.log('hello')

function sleep(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

async function main() {
  console.log('start')
  await sleep(1000)
  console.log('end')
}
