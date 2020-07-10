import React from 'react'
import { data } from '../data';

const Products = (props) => {
  const id = props.match.params.id
  const product = data.products.find(d => d._id === id)
    return (
        <div>
          <h1>{product.name}</h1>
        </div>
    )
}

export default Products
