export interface Tea {
  id: number
  title: string
  description: string
  type: string
  image: string
  image2: string
  price: number
  rating: number
  leafSize: string
  stock: number
}

export interface CartItem extends Tea {
  count: number
}

export interface Promo {
  id: string
  name: string
  discount: number
}