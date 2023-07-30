import React from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = ({products}) => {
    const { id } = useParams()
    const currentProduct = products.find((product) => product.id === +id)
  return (
    <div>
        {currentProduct && <h3>{currentProduct?.name}</h3>}
        <p>{currentProduct?.price}</p>
    </div>
  )
}

export default DetailPage