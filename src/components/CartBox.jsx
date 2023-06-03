// import React from 'react'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

const CartBox = (props) => {
  const { id, title, image, description, price } = props
  return (
    <div className="flex w-[800px] mx-auto">
      <div className="flex gap-4 w-[70%] h-[80px] my-2">
        <img className="w-[80px] h-[100%] " src={image} alt="" />
        <div className="flex flex-col h-[100%]">
          <h2 className="font-semibold  ">{title}</h2>
          <p className="font-semibold  select-none">${price}</p>
          <p className="text-sm mt-auto shadow border w-max px-2 rounded-md hover:border-yellow-500 text-red-400 hover:text-red-500  cursor-pointer">
            Remove
          </p>
        </div>
      </div>
      <div className="w-[30%] flex flex-col gap-1 items-center justify-center">
        <p className=" font-semibold cursor-pointer select-none ">
          <RiArrowUpSLine className=" text-xl" />
        </p>
        <p className=" font-semibold select-none ">1</p>
        <p className=" font-semibold cursor-pointer select-none ">
          <RiArrowDownSLine className=" text-xl" />
        </p>
      </div>
    </div>
  )
}

export default CartBox
