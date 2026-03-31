class Prato {
  descriptionPrato: string
  price: number
  tituloPrato: string
  imagePrato: string
  infoPrato: string[]

  constructor(
    descriptionPrato: string,
    price: number,
    tituloPrato: string,
    imagePrato: string,
    infoPrato: string[]
  ) {
    this.descriptionPrato = descriptionPrato
    this.price = price
    this.tituloPrato = tituloPrato
    this.infoPrato = infoPrato
    this.imagePrato = imagePrato
  }
}
export default Prato
