import fs from 'fs'

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }


// const data = JSON.stringify(book);
// fs.writeFileSync('1-json.json', data)


const dataBuffer = fs.readFileSync('1-json.json')

console.log(dataBuffer.toString())

const data = JSON.parse(dataBuffer)

data.name = 'Gunther'
data.age = 23;


console.log(JSON.stringify(data));

console.log(data.title)