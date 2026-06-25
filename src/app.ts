import path from "node:path"

import express from 'express'
import cors from 'cors'

import route from "./routes.ts"

const app = express();

app.use(express.static(path.join(path.resolve("."), "src", "public")))

app.use(express.json())
app.use(cors())

app.use(route)

app.listen(3000, () => console.log('server running on port 3000'))