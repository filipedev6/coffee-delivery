import { ReactNode, createContext, useState, useEffect } from 'react'

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
  paymentMethodAction: string
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
  setCoffeeListToContext: (list: typeCoffeeList[]) => void
  setPaymentMethodActionToContext: (payment: string) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [paymentMethodAction, setPaymentMethodAction] = useState('')
  const [coffeeList, setCoffeeList] = useState<typeCoffeeList[]>(() => {
    const storage = localStorage.getItem(
      '@ignite-coffee-delivery:products-state-1.0.0',
    )

    if (storage) {
      return JSON.parse(storage)
    }

    return []
  })

  function addCoffeeToCart(
    productCoffeeAdd: typeCoffeeList,
    quantityCoffeeProduct: number,
  ) {
    const findSameProduct = coffeeList.find((productCoffee) => {
      return productCoffee.id === productCoffeeAdd.id
    })

    if (findSameProduct) {
      updateCoffeeToCart(
        productCoffeeAdd,
        findSameProduct.quantity
          ? findSameProduct.quantity + quantityCoffeeProduct
          : quantityCoffeeProduct,
      )
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
    console.log(coffeeList)
  }

  function setCoffeeListToContext(list: typeCoffeeList[]) {
    setCoffeeList(list)
  }

  function setPaymentMethodActionToContext(payment: string) {
    setPaymentMethodAction(payment)
  }

  useEffect(() => {
    localStorage.setItem(
      '@ignite-coffee-delivery:products-state-1.0.0',
      JSON.stringify(coffeeList),
    )
  }, [coffeeList])

  return (
    <CartContext.Provider
      value={{
        coffeeList,
        addCoffeeToCart,
        removeCoffeeToCart,
        updateCoffeeToCart,
        setCoffeeListToContext,
        paymentMethodAction,
        setPaymentMethodActionToContext,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
