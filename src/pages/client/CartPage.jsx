import React from "react";

const CartPage = () => {
  return (
    <>
      <div className="container py-5">
        {/* Title & Breadcrumb */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Giỏ Hàng</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/">Trang Chủ</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Giỏ Hàng
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
};

export default CartPage;
