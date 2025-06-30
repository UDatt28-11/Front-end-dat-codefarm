import React from "react";

const BlogListPage = () => {
  return (
    <div>
      <div className="container py-5">
        {/* Title & Breadcrumb */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Tin Tức</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/">Trang Chủ</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Tin Tức
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
