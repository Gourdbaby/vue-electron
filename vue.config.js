
const glob = require('glob')
const path = require('path')

let pages = {}
const files = glob.sync(path.resolve(__dirname, 'src/pages/*'))
files.forEach(file => {
  const fileName = file.substr(file.lastIndexOf('/')+1)
  if(!pages[fileName]){
    pages[fileName] = {
      entry: `${file}/main.ts`
    }
  }
})

module.exports = {
  pages: pages
}