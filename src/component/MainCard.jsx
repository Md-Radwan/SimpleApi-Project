import React, { useState,useEffect } from 'react'
import Card from './Card'
import axios from 'axios'

const MainCard = () => {

    const [products,setProducts] = useState([])

    const [loading, setLoading] = useState(false)

    async function getAllProducts() {
      const data = await axios.get("https://fakestoreapi.com/products")
      setProducts(data.data)
      setLoading(true)
    }

    useEffect(()=>{
        // fetch('https://fakestoreapi.com/products')
        // .then(response => response.json())
        // .then((data)=>{
        //     setProducts(data)
        // });
        getAllProducts()
    },[])
    // console.log(products)

  return (
    <div className='container mx-auto flex flex-wrap justify-between gap-5 my-10'>
      {
        loading ?
        products.map((item,idx)=>{
            return(
                <Card
                 key={idx}
                 img={item.image}
                 title={item.title}
                 price={item.price}/>
            )
        }) :
        <h1>loading....</h1>
      }
    </div>
  )
}

export default MainCard
