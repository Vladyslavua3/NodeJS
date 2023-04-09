const path = require('path')


// console.log(path.join(__dirname,'first','second','third'))
//
//
// console.log(path.join(__dirname,'..','..'))
//
//
// console.log('Shows absolute way',path.resolve('first','second'))


const fullpath = path.resolve(__dirname,'first','second','third.js')

// console.log('Parse the way', path.parse(fullpath))
//
// console.log('operating environment separator', path.sep)
//
// console.log('Check the absolute way', path.isAbsolute('first/second'))
//
// console.log('Name of file', path.basename(fullpath))
//
// console.log('extension of file' , path.extname(fullpath))
//

//-------------------------------------------


const siteURL = 'http://localhost:8080/users?id=5123'

const url = new URL(siteURL)

// console.log(url)