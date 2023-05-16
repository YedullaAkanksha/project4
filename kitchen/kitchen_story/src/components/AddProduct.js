import React from "react";
import { useState } from "react";
import axios from "axios";
// http://localhost:4004/posts
const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    des: "",
    price: "",
    status: "",
  });

  //   const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
    console.log(value);
  };

  const handleSubmit = () => {
    console.log("Submitted");
    const data1 = product;
    console.log(data1);

    axios
      .post("http://localhost:4004/posts/", data1)
      .then((response) => alert("Data Added"));
  };

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card-header fs-3 text-center">Add Product</div>
              {/* {msg && <p className="fs-4 text-center text-success">{msg}</p>} */}

              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label>Enter Product Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.name}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter Description</label>
                    <input
                      type="text"
                      name="des"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.des}
                    />
                  </div>
                  <div className="mb-3">
                    <label>Enter Price</label>
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.price}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Enter Status</label>
                    <input
                      type="text"
                      name="status"
                      className="form-control"
                      onChange={(e) => handleChange(e)}
                      value={product.status}
                    />
                  </div>
                  <button className="btn btn-primary col-md-12">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
