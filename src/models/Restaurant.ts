class Restaurant {
  id: number
  title: string
  image: string
  infos: string[]
  rating: number
  description: string

  constructor(
    id: number,
    title: string,
    image: string,
    infos: string[],
    rating: number,
    description: string
  ) {
    this.id = id
    this.title = title
    this.image = image
    this.infos = infos
    this.rating = rating
    this.description = description
  }
}

export default Restaurant
