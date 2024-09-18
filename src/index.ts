import express,{Router} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import BodyParser from 'body-parser'

dotenv.config()
const server = express()














server.use(cors())
server.use(express.json())
server.use(helmet())
server.use(BodyParser.json())



export default server
