class Game {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  /*priceNormal: number
  pricePromo?: number*/
  id: number

  constructor(
    id: number,
    title: string,
    category: string,
    system: string,
    description: string,
    infos: string[],
    image: string
    /*priceNormal: number,
    pricePromo: number*/
  ) {
    this.id = id
    this.title = title
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.system = system
    /*this.priceNormal = priceNormal
    this.pricePromo = pricePromo*/
  }
}

export default Game
