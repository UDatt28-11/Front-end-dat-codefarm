import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetchList from "../../hooks/useFetchList";
import { deleteProduct } from "../../api/productApi";

const inititalProduct = {};
const ProductListPage = () => {
  const [list, loading, error] = useFetchList("products", {});

  const handleDelete = async (id) => {
    try {
      if (confirm("Bạn có chắc chắn xóa")) {
        const data = await deleteProduct(id);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    ProductListPage;
  }, []);
  return (
    <div>
      <div>
        <h1>Quan ly Products</h1>
        <Link to="#" className="btn btn-primary">
          Add Products
        </Link>
        <table className="table table-bodered table-striped">
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {list &&
              list.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>{" "}
                    {""}
                    <Link className="btn btn-warning" to={`update/${item.id}`}>
                      Update
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductListPage;
