export interface Tea {
  id: number
  title: string
  description: string
  type: string
  image: string
  price: string
  rating: string
  leafSize: string
}

export interface CartItem extends Tea {
  count: number
}