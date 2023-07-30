const AboutPages = () => {
    const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
]
  return (
    <div className="">
        {products.map((product, index) =>{
          return (
            <div key={index + 1}>
              <div className="">{product.name}</div>
              <div className="">{product.price}</div>
            </div>
          )
        })}
      </div>
  )
}

export default AboutPages