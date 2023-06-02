import { Button, Group } from '@mantine/core'
import { useContextCustom } from './context/StateContext'
import Navbar from './Navbar'
import Product from './Product'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { useWindowScroll } from '@mantine/hooks'

const Products = () => {
  const [scroll, scrollTo] = useWindowScroll()

  const {
    state: { products },
  } = useContextCustom()
  console.log(products)
  return (
    <div className="relative ">
      <Navbar />
      <div className="container mx-auto flex flex-wrap justify-center gap-5 mt-10 ">
        {products.map((pd) => {
          return <Product key={pd.id} {...pd} />
        })}
      </div>

      <div className="">
        <h1 className="container mx-auto text-center  text-gray-500  font-bold select-none bg-yellow-500 p-7 mt-12">
          Copyright &copy; 2023 JlKhai. All rights reserved.
        </h1>
      </div>
      <Group position="right">
        <Button
          className=" bg-blue-500 hover:bg-blue-700 hover:translate-y-1 rounded-lg right-12 bottom-32 text-3xl px-0"
          onClick={() => scrollTo({ y: 0 })}
        >
          <MdOutlineKeyboardArrowUp />
        </Button>
      </Group>
    </div>
  )
}

export default Products
