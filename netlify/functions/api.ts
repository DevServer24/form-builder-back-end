import serverless from "serverless-http";
import server from "../../src/index";
import { Router } from "express";
import type{ Request,Response } from "express";
const router = Router()
server.use('/api',router)
server.get('/',(req:Request,res:Response) =>{

    res.send('Hello World')
})
export const handler = serverless(server)