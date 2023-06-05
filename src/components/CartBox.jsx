// import React from 'react'
import { useState } from 'react'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { useContextCustom } from '../context/StateContext'

const CartBox = ({ product, incresseTotal, decreaseTotal }) => {
  const [quantity, setQuantity] = useState(1)
  const { dispatch } = useContextCustom()

  const incresement = () => {
    setQuantity(quantity + 1)
    incresseTotal(product.price)
  }
  const decresement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
      decreaseTotal(product.price)
    }
  }

  const oneItemPrice = product.price * quantity

  const removeItem = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: product })
    decreaseTotal(oneItemPrice)
  }
  return (
    <div className="flex max-w-[100%] xl:w-[800px] ml-6 md:ml-16 lg:ml-24 xl:mx-auto">
      <div className="flex md:gap-4 w-[80%] h-[80px] my-2">
        <img className="max-w-[60px] p-2" src={product.image} alt="" />
        <div className="flex flex-col h-[100%]">
          <h2 className="font-semibold text-sm md:text-md ">{product.title}</h2>
          <p className="font-semibold  select-none">
            ${oneItemPrice.toFixed(2)}
          </p>
          <p
            onClick={removeItem}
            className="select-none text-sm mt-auto shadow border w-max px-2 rounded-md hover:bg-red-500 text-yellow-400 hover:text-white  cursor-pointer"
          >
            Remove
          </p>
        </div>
      </div>
      <div className="w-[30%] flex flex-col gap-1 items-center justify-center">
        <p
          onClick={incresement}
          className=" font-semibold cursor-pointer select-none "
        >
          <RiArrowUpSLine className=" text-xl" />
        </p>
        <p className=" font-semibold select-none ">{quantity}</p>
        <p
          onClick={decresement}
          className=" font-semibold cursor-pointer select-none "
        >
          <RiArrowDownSLine className=" text-xl" />
        </p>
      </div>
    </div>
  )
}

export default CartBox
