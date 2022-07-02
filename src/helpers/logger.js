import path from 'path'
import { format } from 'date-fns'
import { v4 as uuid } from 'uuid'
import fs from 'fs'
import fsPromises from 'fs/promises'
import colors from 'colors'

export const logEvents = async (message) => {
  //FORMAT
  const dateTime = `${format(new Date(), 'yyy/MM/dd\tHH:mm:ss')}`
  const logItem = `${dateTime}\t${uuid()}`
  console.log(`${logItem}\t`, message.green)

  //SAVE LOG ON TXT FILE
  const base_path = path.join(__dirname, './../logs')
  try {
    if (!fs.existsSync(base_path)) await fsPromises.mkdir(base_path)
    await fsPromises.appendFile(
      path.join(base_path, 'logs.txt'),
      `${logItem}\t${message}\n`,
    )
  } catch (err) {
    console.error(err.message.red)
  }
}
