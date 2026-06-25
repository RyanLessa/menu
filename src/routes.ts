import path from "node:path"

import { Router} from 'express';
import type { Request, Response } from 'express'

const route = Router()

const TEMPLATEPATH = path.join(path.resolve("."), "src", "templates")

route.get('/', (req: Request, res: Response) => {
  const templatePath = path.join(
    TEMPLATEPATH,
    "home.html"
  )

  res.sendFile(templatePath)
})

route.get('/navegador', (req: Request, res: Response) => {
  const templatePath = path.join(
    TEMPLATEPATH,
    "navegador.html"
  )

  res.sendFile(templatePath)
})

route.get('/contatos', (req: Request, res: Response) => {
  const templatePath = path.join(
    TEMPLATEPATH,
    "contatos.html"
  )

  res.sendFile(templatePath)
})

route.get('/musica', (req: Request, res: Response) => {
  const templatePath = path.join(
    TEMPLATEPATH,
    "musica.html"
  )

  res.sendFile(templatePath)
})

export default route