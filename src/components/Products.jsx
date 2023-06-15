import { Button, Group } from '@mantine/core'
import { useContextCustom } from '../context/StateContext'
import Product from './Product'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { useWindowScroll } from '@mantine/hooks'
import { Loader } from '@mantine/core'

const Products = () => {
  const [scroll, scrollTo] = useWindowScroll()

  const {
    state: { products },
    isLoading,
  } = useContextCustom()
  // console.log(products)
  return (
    <div className="relative flex flex-col h-screen">
      <div className="container mx-auto flex flex-wrap justify-center gap-5 mt-10 ">
        {products?.map((pd) => {
          return <Product key={pd.id} {...pd} />
        })}

        {isLoading && (
          <Loader
            className="flex justify-center items-center h-screen"
            color="gray"
            size="xl"
            variant="dots"
          />
        )}
      </div>
      <div className="mt-auto">
        <Group position="right">
          <Button
            className=" bg-yellow-600 hover:bg-yellow-700 hover:translate-y-1 rounded-lg text-3xl px-0 right-5 md:right-12 "
            onClick={() => scrollTo({ y: 0 })}
          >
            <MdOutlineKeyboardArrowUp />
          </Button>
        </Group>

        <h1 className="container mx-auto text-center  text-gray-500  font-bold select-none bg-yellow-500 p-6 mt-12">
          Copyright &copy; 2023 JlKhai. All rights reserved.
        </h1>
      </div>
    </div>
  )
}

export default Products
