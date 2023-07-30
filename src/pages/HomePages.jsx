import { useState } from "react"
const HomePages = ( {data} ) => {
  const [products, setProducts] = useState(data);
  const addProduct = (product) => {
    setProducts([...products, product]);
  }
  const deletePrd = (id) => {
    const newData = products.filter((product) => product.id !== id);
    setProducts(newData);
  }
  const updatePrd = (id) => {
    const newData = products.map((product) => {
      return product.id == id ? {...product, id: 1, name: "Product 1 update", price: 100} : product;
    }); 
    setProducts(newData);
  }
  

  return (
    <div>
    <button onClick={() => addProduct( {id: 4, name: "Product 4", price: 400 })}>Add New</button>
    {products.map((product, index) => {
      return (
        <div key={index + 1}>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <button onClick={() => updatePrd(product.id)}>Update</button>
          <button onClick={() => deletePrd(product.id)}>Delete</button>
        </div>
      )
    })}
    </div>
  )
}

export default HomePages