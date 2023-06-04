// import React from 'react'
import { useState } from 'react'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

const CartBox = (props, { increaseTotal }) => {
  const { id, title, image, description, price } = props
  const [quantity, setQuantity] = useState(1)

  const incresement = () => {
    setQuantity(quantity + 1)
    increaseTotal(price)
  }

  const decresement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const oneItemPrice = price * quantity
  return (
    <div className="flex w-[800px] mx-auto">
      <div className="flex gap-4 w-[70%] h-[80px] my-2">
        <img className="w-[80px] h-[100%] " src={image} alt="" />
        <div className="flex flex-col h-[100%]">
          <h2 className="font-semibold  ">{title}</h2>
          <p className="font-semibold  select-none">
            ${oneItemPrice.toFixed(2)}
          </p>
          <p className="select-none text-sm mt-auto shadow border w-max px-2 rounded-md hover:bg-red-500 text-yellow-400 hover:text-white  cursor-pointer">
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
