import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'


export const ProductDetails = () => {

  const [product, setProduct] = useState("")

  const { id } = useParams();

  const getSingleProduct = async () => {
    const { data } = await axios.get(`http://localhost:8000/api/${id}`)
    setProduct(data)
  }

  useEffect(() => {
    getSingleProduct();
  })

  return (
    <div className='container'>
      <h1>Product Detail</h1>
      <div className='single-product-info'>
        <div className='col-md-4'>
          <div className="card ">
            <img src={product.image} className="card-img-top" alt="..." style={{ height: '250px' }} />
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p className="card-text">{product.description}</p>
              <p className="card-text">{product.price}</p>
              <p className="card-text">{product.category}</p>
              <Link className='btn btn-primary m-2' to={`/${product.id}/update`}>Show Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
