import { Link } from 'react-router-dom'
import { useContextCustom } from '../context/StateContext'

const Detail = () => {
  // const [item, setItem] = useState({})
  // const { id } = useParams()

  // useEffect(() => {
  //   fetchdatabyId()
  // }, [])
  // const fetchdatabyId = async () => {
  //   const api = await fetch(`https://fakestoreapi.com/products/${id}`)
  //   const data = await api.json()
  //   setItem(data)
  //   // console.log(data)
  // }
  // const { id, title, image, price, description } = props
  // console.log(props)

  const {
    state: { cart },
  } = useContextCustom()
  // console.log(cart)

  return (
    <div className=" h-screen w-screen flex justify-center items-center bg-yellow-600 ">
      <div className=" w-[560px] h-[560px] rounded-xl shadow-xl p-10 bg-white">
        <img
          src={cart.image}
          className="max-w-[100%] h-[40%] mx-auto rounded"
        />
        <div className="mt-4 flex flex-col h-[60%] ">
          <h1 className="font-bold text-xl mb-1 truncate">{cart.title}</h1>
          <p className="opacity-90">{cart.description}</p>
          <p className=" text-lg text-red-700 font-semibold select-none">
            ${cart.price}
            <span className="text-blue-700 text-xs"> Only for now</span>
          </p>
          <div className="flex justify-around mt-auto">
            <Link to={'/'}>
              <button className="select-none px-4 py-1 bg-teal-600 hover:bg-teal-800 rounded text-white">
                Back
              </button>
            </Link>
            <button className=" select-none px-4 py-1 rounded bg-teal-600  hover:bg-teal-800 text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
