import Prato from './Prato'

class Restaurant {
  title: string
  description: string
  infos: string[]
  image: string
  nota: number
  id: number
  pratos: Prato[]

  constructor(
    id: number,
    nota: number,
    description: string,
    image: string,
    infos: string[],
    title: string,
    pratos: Prato[]
  ) {
    this.id = id
    this.nota = nota
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.pratos = pratos
  }
}

export default Restaurant
