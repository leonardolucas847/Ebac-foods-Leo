class Restaurant {
  title: string
  description: string
  infos: string[]
  image: string
  nota: number
  id: number

  constructor(
    id: number,
    nota: number,
    description: string,
    image: string,
    infos: string[],
    title: string
  ) {
    this.id = id
    this.nota = nota
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
  }
}

export default Restaurant
