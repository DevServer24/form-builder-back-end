import express,{Router} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import BodyParser from 'body-parser'

dotenv.config()
const server = express()
const port = process.env.PORT || 4000













server.use(cors())
server.use(express.json())
server.use(helmet())
server.use(BodyParser.json())

server.listen(port,() =>{
    console.log('server connected')
})

export default server
