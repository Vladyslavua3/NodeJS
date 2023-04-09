const fs = require('fs')
const path = require('path')

//How to create files
//fs.mkdirSync(path.resolve(__dirname,'dir','dir2','dir3'),{recursive:true})


//For Async

// console.log('START')
//
// fs.mkdir(path.resolve(__dirname,'dir'),(err)=>{
//  if(err){
//      console.log(err)
//      return;
//  }
//  console.log('File have created')
// })
//
// console.log('FINISH')


// For delete
// fs.rmdir(path.resolve(__dirname,'dir'), (err)=> {
//     if(err){
//         throw err
//     }
// })

// How to write something in file

// fs.writeFile(path.resolve(__dirname,'test.txt'),"What's up",(err)=>{
//     if(err){
//         throw err
//     }
//
//     console.log('File have created')

/// If you wanna for sure add something to end of file

// fs.appendFile(path.resolve(__dirname,'test.txt'),"I'm alright",(err)=>{
//     if(err){
//         throw err
//     }
//
//     console.log('File have created')
// })
// })


//How to add something in file

// fs.appendFile(path.resolve(__dirname,'test.txt'),"I'm alright",(err)=>{
//     if(err){
//         throw err
//     }
//
//     console.log('File have created')
// })

/// Create a promise for adding something in file because that is sync

const writeFileAsync = async (path,data) => {
    return new Promise((resolve,reject) => fs.writeFile(path,data,(err)=>{
        if(err){
            return reject(err.message)
        }
        resolve()
    }))
}


const appendFileAsync = async (path,data) => {
    return new Promise((resolve,reject) => fs.appendFile(path,data,(err)=>{
        if(err){
            return reject(err.message)
        }
        resolve()
    }))
}



// How to read files
const readFileAsync = async (path) => {
    return new Promise((resolve,reject) => fs.readFile(path,{encoding:'utf-8'},(err,data)=>{
        if(err){
            return reject(err.message)
        }
        resolve(data)
    }))
}

// How to remove file

const removeFileAsync = async (path) => {
    return new Promise((resolve,reject) => fs.rm(path,(err)=>{
        if(err){
            return reject(err.message)
        }
        resolve()
    }))
}

// writeFileAsync(path.resolve(__dirname, 'test.txt'), 'data')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'),'123'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'),'456'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'),'789'))
//     .then(() => readFileAsync(path.resolve(__dirname,'test.txt')))
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// removeFileAsync(path.resolve(__dirname,'test.txt'))
// .then(() => console.log('File have removed'))


//pass a string through an environment variable, write it to a file,
// read the file, count the number of words in the file and write them to a new file count.txt ,
// then delete the first file


const text = process.env.TEXT || ''


writeFileAsync(path.resolve(__dirname,'text.txt'),text)
.then(() => readFileAsync(path.resolve(__dirname,'text.txt')))
.then(data => data.split(' ').length)
.then(count => writeFileAsync(path.resolve(__dirname,'count.txt'),`Length is ${count}`))
.then(() => removeFileAsync(path.resolve(__dirname,'text.txt')))