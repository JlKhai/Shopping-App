import { Button, Group } from '@mantine/core'
import { useContextCustom } from '../context/StateContext'
import Product from './Product'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import { useWindowScroll } from '@mantine/hooks'
import { Loader } from '@mantine/core'
import Footer from './Footer'

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
      <Group position="right">
        <Button className="hover:bg-white">
          <MdOutlineKeyboardArrowUp
            className=" cursor-pointer bg-yellow-600 hover:translate-y-1 rounded-t-xl text-3xl px-0 right-5 mb-2 md:right-12 "
            onClick={() => scrollTo({ y: 0 })}
          />
        </Button>
      </Group>

      <Footer />
    </div>
  )
}

export default Products
