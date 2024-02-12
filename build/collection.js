import fs from 'fs'
import pjson from '../package.json' assert { type: 'json' }
import base from '../package-collection.json' assert { type: 'json' }

const readme = fs.readFileSync('./README-COLLECTION.md', {
  flag: 'r',
})

// Keep versions in sync
const packageCollection = {
  ...base,
  version: pjson.version,
}

fs.writeFileSync(
  './collection/package.json',
  JSON.stringify(packageCollection),
  { flag: 'w+' },
)

fs.writeFileSync('./collection/README.md', readme, { flag: 'w+' })
