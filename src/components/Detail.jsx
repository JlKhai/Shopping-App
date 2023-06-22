import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Detail = () => {
  const [item, setItem] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetchdata()
  }, [])
  const fetchdata = async () => {
    const api = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await api.json()
    setItem(data)
    console.log(data)
  }

  return (
    <div className="mx-auto h-screen w-screen flex justify-center  items-center bg-yellow-600 ">
      <div className="w-[100%] md:w-[560px] h-[560px] md:rounded-xl shadow-2xl p-10 bg-white">
        <img
          src={item.image}
          className="max-w-[100%] h-[40%] mx-auto rounded"
        />
        <div className="mt-4 flex flex-col h-[60%] ">
          <h1 className="font-bold text-xl mb-1 truncate">{item.title}</h1>
          <p className="opacity-90">{item.description}</p>
          <p className="mt-1 text-lg text-red-700 font-semibold select-none">
            <span className="text-blue-700 text"> Only </span>${item.price}
            <span className="text-blue-700 text-xs font-serif"> for now</span>
          </p>
          <div className="mt-auto">
            <Link to={'/'}>
              <button className="w-[100%]  select-none px-4 py-1 bg-teal-600 hover:bg-teal-800 transition ease-in duration-200 rounded-full text-white">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
