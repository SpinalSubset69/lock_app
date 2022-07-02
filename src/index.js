import app from './app'
import { logEvents } from './helpers'

app.listen(3000, () => {
  logEvents('listening on port 3000')
})
