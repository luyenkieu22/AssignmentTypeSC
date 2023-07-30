import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutPages from "./pages/AboutPages";
import Contact from "./pages/Contact";
import { useEffect, useState } from "react";
import DetailPage from "./pages/DetailPage";
import { Home, AddProducts, Dashboard, Products, UpdateProduct } from "./pages";
function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const removeProduct = (id) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    }).then(() => setProducts(products.filter((items) => items.id != id)));
  };

  const addProduct = (product) => {
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  };

  const onUpdate = (product) => {
    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  };
  return (
    <>
      <Routes>
        <Route index element={<Home products={products} />} />
        <Route
          path="/detail/:id"
          element={<DetailPage products={products} />}
        />
        <Route path="/about" element={<AboutPages />} />
        <Route path="/contact" element={<Contact />} />
        {/* admin */}
        <Route path="/admin" element={<Dashboard products={products} />} />
        <Route
          path="/admin/product"
          element={
            <Products products={products} removeProduct={removeProduct} />
          }
        />
        <Route
          path="/admin/product/add"
          element={<AddProducts addProduct={addProduct} />}
        />
        <Route
          path="/admin/product/update/:id"
          element={<UpdateProduct onUpdate={onUpdate} products={products} />}
        />
      </Routes>
    </>
  );
}

export default App;
