import { useContextCustom } from '../context/StateContext'
import CartBox from './CartBox'

const Cart = () => {
  const {
    state: { cart },
  } = useContextCustom()
  console.log(cart)
  return (
    <div>
      <div className="mt-10">
        {cart.map((product) => {
          return <CartBox key={product.id} {...product} />
        })}
      </div>

      <hr className="mt-5 w-[800px] mx-auto" />
      <div className="mt-5 flex justify-evenly gap-20">
        <h2 className="font-semibold select-none ">Total Price</h2>
        <h2 className="font-semibold">$1000</h2>
      </div>
    </div>
  )
}

export default Cart
