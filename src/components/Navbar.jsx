import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { FcShop } from 'react-icons/fc'
import { useContextCustom } from '../context/StateContext'
const Navbar = () => {
  const {
    search,
    setSearch,
    state: { cart },
  } = useContextCustom()
  // console.log(search)
  // console.log(cart)
  return (
    <div className="container mx-auto flex  justify-around bg-teal-700 p-5">
      <Link to={'/'}>
        <div className=" flex flex-col md:flex-row items-center hover:opacity-70 md:gap-2">
          <FcShop className="text-2xl md:text-4xl  " />
          <h2 className="text-sm md:text-2xl  font-bold text-white cursor-pointer select-none">
            My Shop
          </h2>
        </div>
      </Link>
      <div className="flex gap-3 md:gap-5 items-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className=" bg-gray-300 px-2 py-2 outline-none rounded"
        />
        <Link to={'/cart'}>
          <div className="relative hover:opacity-60">
            <FaShoppingCart className=" text-yellow-400 text-3xl cursor-pointer select-none" />
            <span className=" absolute bottom-6 left-6 h-5 w-5 rounded-[100%] flex items-center justify-center bg-white text-teal-500 cursor-pointer select-none">
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
