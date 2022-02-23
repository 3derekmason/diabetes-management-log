import zipdir from 'zip-dir'
import { writeFileSync } from 'fs'

zipdir('../', { filter: path => !/node_modules$/.test(path) }, (_, buffer) => {
  writeFileSync('submission.zip', buffer)
})
