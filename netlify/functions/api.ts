import serverless from "serverless-http";
import server from "../../src/index";
import { Router } from "express";
const router = Router()
server.use('/api',router)

export const handler = serverless(server)