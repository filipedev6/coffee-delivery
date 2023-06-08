import { ReactNode, createContext, useState } from 'react'

export interface typeCoffeeList {
  id: number
  urlImg: string
  name: string
  valuePrice: number
  description: string
  labelsTag: string[]
  quantity: number
}

interface CartContextType {
  coffeeList: typeCoffeeList[]
  addCoffeeToCart: (
    productCoffeeAdd: typeCoffeeList,
    quantityCoffeeProduct: number,
  ) => void
  removeCoffeeToCart: (productCoffeeRemove: typeCoffeeList) => void
  updateCoffeeToCart: (
    productCoffeeUpdate: typeCoffeeList,
    newQuantity: number,
  ) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffeeList, setCoffeeList] = useState<typeCoffeeList[]>([])

  function addCoffeeToCart(
    productCoffeeAdd: typeCoffeeList,
    quantityCoffeeProduct: number,
  ) {
    const findSameProduct = coffeeList.find((productCoffee) => {
      return productCoffee.id === productCoffeeAdd.id
    })

    if (findSameProduct) {
      updateCoffeeToCart(productCoffeeAdd, quantityCoffeeProduct)
    } else {
      setCoffeeList((state) => [
        ...state,
        { ...productCoffeeAdd, quantity: quantityCoffeeProduct },
      ])
    }
  }

  function removeCoffeeToCart(productCoffeeRemove: typeCoffeeList) {
    const productRemoveList = coffeeList.filter((coffeeProduct) => {
      return coffeeProduct.id !== productCoffeeRemove.id
    })

    setCoffeeList(productRemoveList)
  }

  function updateCoffeeToCart(
    productCoffeeUpdate: typeCoffeeList,
    newQuantity: number,
  ) {
    const productsListUpdated = coffeeList.map((productCoffee) => {
      if (productCoffeeUpdate.id === productCoffee.id) {
        return {
          ...productCoffee,
          quantity: newQuantity,
        }
      }

      return productCoffee
    })

    setCoffeeList(productsListUpdated)
  }

  return (
    <CartContext.Provider
      value={{
        coffeeList,
        addCoffeeToCart,
        removeCoffeeToCart,
        updateCoffeeToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
