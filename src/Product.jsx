const Product = (props) => {
  const { title, image, price, id, description } = props
  return (
    <div className=" w-[260px] h-[340px] rounded shadow-xl hover:translate-x-2 hover:translate-y-5 p-7">
      <img src={image} className="max-w-[100%] h-[50%] mx-auto rounded" />
      <div className="mt-4 flex flex-col h-[50%] ">
        <div className="">
          <h1 className="font-semibold">{title.substring(0, 25)}...</h1>
          <p className="opacity-70 text-sm">
            {description.substring(0, 30)}...
          </p>
          <p className=" text-lg text-red-700 font-semibold select-none ">
            ${price}
          </p>
        </div>
        <div className="flex gap-4 mt-auto">
          <button className=" px-4 py-1 bg-teal-600 hover:bg-teal-800 rounded text-white">
            Detail
          </button>
          <button className="px-4 py-1 rounded bg-teal-600  hover:bg-teal-800 text-white">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
