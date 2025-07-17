import React, { useEffect, useState } from "react";
import { Table, Tag, Space, Button, message, Popconfirm } from "antd";
import { getAllProduct, deleteProduct } from "../../api/productApi";
import { useNavigate } from "react-router-dom";

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await getAllProduct();
      console.log("Dữ liệu trả về từ API:", res.data);

      const productList = res.data?.data?.products;
      setProducts(Array.isArray(productList) ? productList : []);
    } catch (error) {
      message.error("Không thể tải sản phẩm!");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      message.success("Xóa sản phẩm thành công!");
      fetchProducts();
    } catch (error) {
      message.error("Xóa thất bại!");
    }
  };

  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      render: (text) => <span>{text?.slice(0, 60)}...</span>,
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
      render: (price) =>
        typeof price === "number" ? `${price.toLocaleString()} đ` : "Không có",
    },

    {
      title: "Ảnh",
      dataIndex: "thumbnail",
      key: "thumbnail",
      render: (url) => (
        <img
          src={url}
          alt="ảnh sản phẩm"
          style={{ width: 60, height: 60, objectFit: "cover", borderRadius: 4 }}
        />
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "isActive",
      key: "isActive",
      render: (isActive) =>
        isActive ? <Tag color="green">Hiện</Tag> : <Tag color="red">Ẩn</Tag>,
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => navigate(`/admin/products/${record._id}`)}>
            Chi tiết
          </Button>
          <Popconfirm
            title="Bạn có chắc chắn muốn xóa sản phẩm này?"
            onConfirm={() => handleDelete(record._id)}
            okText="Xóa"
            cancelText="Hủy"
          >
            <Button danger>Xóa</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 16,
        }}
      >
        <h2>Danh sách sản phẩm</h2>
        <Button type="primary" onClick={() => navigate("/admin/products/add")}>
          + Thêm sản phẩm
        </Button>
      </div>
      <Table
        rowKey="_id"
        dataSource={products}
        columns={columns}
        loading={loading}
        bordered
      />
    </div>
  );
};

export default ProductListPage;
