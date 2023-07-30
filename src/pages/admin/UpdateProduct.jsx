import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const UpdateProduct = ({ products, onUpdate }) => {
  const { id } = useParams();
  const currentProduct = products.find((product) => product.id == id);

  const [inputValue, setInputValue] = useState();
  const onHandleChange = (event) => {
    const { name, value } = event.target;
    const newData = { ...inputValue, [name]: value };
    setInputValue(newData);
  };
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const dataUpdate = { ...inputValue, id: id };
    onUpdate(dataUpdate);
  };

  return (
    <div>
      <form action="" onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="Enter Product Name"
          defaultValue={currentProduct?.name}
          onChange={onHandleChange}
          name="name"
        />
        <input
          type="text"
          placeholder="Enter Product Price"
          defaultValue={currentProduct?.price}
          onChange={onHandleChange}
          name="price"
        />
        <button>
          <Link to={`/admin/product`}>Submit</Link>
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
