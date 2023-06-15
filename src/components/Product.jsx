import { Link } from 'react-router-dom'
import { useContextCustom } from '../context/StateContext'

const Product = (props) => {
  const { title, image, price, id, description } = props

  const { dispatch } = useContextCustom()
  return (
    <div className=" w-[260px] h-[360px] rounded-lg shadow-2xl hover:scale-110 transition duration-150 hover:ease-in-out p-7">
      <Link to={`/detail/${id}`}>
        <img src={image} className="max-w-[100%] h-[50%] mx-auto rounded" />
        <div className="mt-4 flex flex-col h-[35%] ">
          <h1 className="font-semibold mb-1">{title.substring(0, 25)}...</h1>
          <p className="opacity-70 text-sm">
            {description.substring(0, 20)}...
          </p>
          <p className=" text-lg text-red-700 font-semibold select-none">
            ${price}
          </p>
        </div>
      </Link>
      <div className=" mt-auto">
        <button
          className="w-[100%] select-none px-4 py-2 rounded bg-blue-500  hover:bg-blue-700 text-white"
          onClick={() => dispatch({ type: 'ADD_TO_CART', payload: props })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Product
