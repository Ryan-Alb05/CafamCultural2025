import express from 'express'
import path from 'path'
import { fileURLToPath} from "url"
import router from './routes/index.routes.js'

const app = express()
const _dirname = path.dirname(fileURLToPath(import.meta.url))


app.set('views', path.join(_dirname,"views"))
app.set('view engine', "ejs")
app.use(express.static(path.join(_dirname, "public")))
app.use(router)



export default app