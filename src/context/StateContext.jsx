import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { reducer } from './reducer/Reducer'

export const StateContext = createContext()

export const StateContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([])
  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`)
    const data = await api.json()
    setProductList(data)
    setIsLoading(false)
    // console.log(data)
  }

  useEffect(() => {
    dispatch({ type: 'GET_PRODUCT', payload: productList })
    const filteredPd = productList.filter((item) =>
      item.title.toLowerCase().includes(search),
    )
    // console.log(filteredPd)
    dispatch({ type: 'GET_PRODUCT', payload: filteredPd })
  }, [productList, search])

  const initialState = {
    products: [],
    cart: [],
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  // console.log(state)
  const data = { state, dispatch, search, setSearch, isLoading, setIsLoading }
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>
}

export const useContextCustom = () => useContext(StateContext)
