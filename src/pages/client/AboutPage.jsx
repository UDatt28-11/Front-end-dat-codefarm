import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div className="container py-5">
        {/* Title & Breadcrumb */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Giới Thiệu</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/">Trang Chủ</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Giới Thiệu
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
