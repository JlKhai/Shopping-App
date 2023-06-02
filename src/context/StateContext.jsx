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

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`)
    const data = await api.json()
    setProductList(data)
    // console.log(data)
  }

  useEffect(() => {
    dispatch({ type: 'GET_PRODUCT', payload: productList })
  }, [productList])

  const initialState = {
    products: [],
    cart: [],
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  // console.log(state)
  const data = { state, dispatch }
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>
}

export const useContextCustom = () => useContext(StateContext)
