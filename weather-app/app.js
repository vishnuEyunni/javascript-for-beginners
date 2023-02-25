console.log('starting')

setTimeout(() => {
  console.log('2 secnd time')
}, 2000)

console.log('Done')


process.on('uncaughtException', err => {
  console.error(err);
  process.exit(1)
})

throw new Error('Ra is a god!')