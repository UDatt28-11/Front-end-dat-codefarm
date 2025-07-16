import React, { useState } from "react";
import { Form, Input, Button, Switch, message } from "antd";
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../api/categoryApi";

const getSlug = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const CategoryFormPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    const title = e.target.value;
    form.setFieldsValue({ slug: getSlug(title) });
  };

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await createCategory(values);
      message.success("Thêm danh mục thành công!");
      navigate("/admin/categories");
    } catch (err) {
      message.error("Danh mục đã được tồn tại hoặc có lỗi xảy ra!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "32px auto",
        background: "#fff",
        padding: 32,
        borderRadius: 12,
        boxShadow: "0 2px 16px #0001",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>
        Thêm danh mục mới
      </h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ isActive: true }}
      >
        <Form.Item
          label="Tiêu đề"
          name="title"
          rules={[{ required: true, message: "Vui lòng nhập tiêu đề" }]}
        >
          <Input placeholder="Nhập tên danh mục" onChange={handleTitleChange} />
        </Form.Item>
        <Form.Item
          label="Slug"
          name="slug"
          rules={[{ required: true, message: "Vui lòng nhập slug" }]}
        >
          <Input placeholder="Slug tự động từ tiêu đề hoặc tự sửa" />
        </Form.Item>
        <Form.Item label="Trạng thái" name="isActive" valuePropName="checked">
          <Switch checkedChildren="Hiện" unCheckedChildren="Ẩn" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Lưu danh mục
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CategoryFormPage;
