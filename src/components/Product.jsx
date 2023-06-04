import { Link } from 'react-router-dom'
import { useContextCustom } from '../context/StateContext'

const Product = (props) => {
  const { title, image, price, id, description } = props

  const { dispatch } = useContextCustom()
  return (
    <div className=" w-[260px] h-[360px] rounded-lg shadow-2xl hover:translate-x-2 hover:translate-y-3 p-7">
      <img src={image} className="max-w-[100%] h-[50%] mx-auto rounded" />
      <div className="mt-4 flex flex-col h-[50%] ">
        <div className="">
          <h1 className="font-semibold mb-1">{title.substring(0, 25)}...</h1>
          <p className="opacity-70 text-sm">
            {description.substring(0, 30)}...
          </p>
          <p className=" text-lg text-red-700 font-semibold select-none">
            ${price}
          </p>
        </div>
        <div className="flex gap-4 mt-auto">
          <Link to={`/detail/${id}`}>
            <button
              className="select-none px-4 py-1 bg-teal-600 hover:bg-teal-800 rounded text-white"
              onClick={() => dispatch({ type: 'TO_DETAIL', payload: props })}
            >
              Detail
            </button>
          </Link>
          <button
            className="select-none px-4 py-1 rounded bg-teal-600  hover:bg-teal-800 text-white"
            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: props })}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
