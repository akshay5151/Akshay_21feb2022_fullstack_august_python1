import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const ShowProduct = () => {
    const [products, setProducts] = useState([])

    const getProduct = async () => {
        const response = await axios.get('http://localhost:8000/api/')
        setProducts(response.data)
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className='container my-3'>
            <h1>Show All Products :-</h1>
            <div className="container row my-3">
                {
                    products.map((product, index) => {
                        return (
                            <div className='col-md-4 my-3'>
                                <div className="card ">
                                    <img src={product.image} className="card-img-top" alt="..." style={{height:'250px'}}/>
                                    <div className="card-body">
                                        <h2 className="card-title">{product.name}</h2>
                                        <p className="card-text">{product.description}</p>
                                        <p className="card-text"><b>$ {product.price}</b></p>
                                        <p className="card-text">{product.category}</p>
                                    </div>
                                    <div>
                                        <Link className='btn btn-primary m-2' to={`/${product.id}`}>Show Details</Link>
                                        <Link className='btn btn-primary m-2' to={`/${product.id}/update`}>Update</Link>
                                        {/* <Link className='btn btn-primary m-2' to={`/${product.id}`}>Show Details</Link> */}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>

        </div>
    )
}

export default ShowProduct