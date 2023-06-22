import { Link } from 'react-router-dom'
import { useContextCustom } from '../context/StateContext'
import CartBox from './CartBox'
import { useEffect, useState } from 'react'

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useContextCustom()
  // console.log(cart.length)

  const [mainTotal, setMainTotal] = useState(0)

  useEffect(() => {
    setMainTotal(total)
  }, [])

  const incresseTotal = (price) => {
    setMainTotal(mainTotal + price)
  }
  const decreaseTotal = (price) => {
    setMainTotal(mainTotal - price)
  }
  const total = () => cart?.reduce((pv, cv) => pv + cv.price, 0)

  return (
    <>
      {cart.length >= 1 ? (
        <div>
          <div className=" mt-5 md:mt-10  ">
            {cart.map((product) => {
              return (
                <CartBox
                  key={product.id}
                  product={product}
                  incresseTotal={incresseTotal}
                  decreaseTotal={decreaseTotal}
                />
              )
            })}
          </div>
          <hr className="mt-5 max-w-[300px]  w-[800px] mx-auto" />
          <div className="mt-5 flex justify-center gap-40 md:gap-96 lg:gap[400px] xl:gap-[460px]">
            <h2 className="font-semibold select-none ">Total Price</h2>
            <h2 className="font-semibold">${mainTotal.toFixed(2)}</h2>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => dispatch({ type: 'REMOVE_CART' })}
              className="shadow mt-5 font-bold font-serif px-6 py-2 text-yellow-500 hover:text-white hover:bg-red-600  transition ease-in duration-500 border border-none rounded-lg "
            >
              Clear Cart
            </button>
          </div>
        </div>
      ) : (
        <div className=" h-screen w-screen flex justify-center items-center">
          <div className=" flex flex-col gap-2 justify-center items-center">
            <h1 className=" font-bold text-3xl text-yellow-500">
              Cart is empty!
            </h1>
            <h1 className=" font-bold text-3xl text-yellow-500">
              Please fill your cart first.
            </h1>
            <Link to={'/'}>
              <button className="mt-5 font-mono text-white  hover:bg-teal-600 transition ease-in duration-200 btn btn-active btn-accent">
                Fill Cart
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Cart
