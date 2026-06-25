import path from "node:path"

import { Router} from 'express';
import type { Request, Response } from 'express'

const route = Router()

interface MenuItemInterface {
  route: string;
  filename: string;
}

class MenuItem implements MenuItemInterface {
  route: string;
  filename: string;

  constructor(route: string, filename: string) {
    this.route = route;
    this.filename = filename;
  }

  getPath(base: string) {
    return path.join(base, this.filename);
  }
}

const home = new MenuItem("/", "home.html")
const navegador = new MenuItem("/navegador", "navegador.html")
const contatos = new MenuItem("/contatos", "contatos.html")
const musica = new MenuItem("/musica", "musica.html")

const TEMPLATEPATH = path.join(path.resolve("."), "src", "templates")

route.get(home.route, (req: Request, res: Response) => {
  const templatePath = path.join(
    TEMPLATEPATH,
    home.filename
  )

  res.sendFile(templatePath)
})

route.get(navegador.route, (req: Request, res: Response) => {
  const templatePath = path.join(
    TEMPLATEPATH,
    navegador.filename
  )

  res.sendFile(templatePath)
})

route.get(contatos.route, (req: Request, res: Response) => {
  const templatePath = path.join(
    TEMPLATEPATH,
    contatos.filename
  )

  res.sendFile(templatePath)
})

route.get(musica.route, (req: Request, res: Response) => {
  const templatePath = path.join(
    TEMPLATEPATH,
    musica.filename
  )

  res.sendFile(templatePath)
})

export default route