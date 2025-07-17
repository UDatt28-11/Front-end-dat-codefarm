import {
  Form,
  Input,
  Button,
  Upload,
  InputNumber,
  message,
  Row,
  Col,
  Select,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../api/categoryApi";
import { createProduct } from "../../api/productApi"; // nếu chưa có thì thêm vào

const ProductForm = () => {
  const [form] = Form.useForm();
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // ✅ useEffect để load danh mục đúng chỗ
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getAllCategories();
        const raw = res.data?.data;

        if (Array.isArray(raw)) {
          setCategories(raw);
        } else if (Array.isArray(raw?.categories)) {
          setCategories(raw.categories);
        } else {
          message.error("Dữ liệu danh mục không đúng định dạng!");
        }
      } catch (error) {
        console.error(error);
        message.error("Không thể tải danh mục!");
      }
    };

    fetchCategories();
  }, []);

  const handleFinish = async (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("slug", values.slug);
    formData.append("description", values.description);
    formData.append("priceDefault", values.priceDefault);
    formData.append("brand", values.brand);
    formData.append("subCategory", values.subCategory);
    formData.append("thumbnail", values.thumbnail?.[0]?.originFileObj);

    try {
      await createProduct(formData);
      console.log(values.thumbnail[0].originFileObj);

      message.success("Thêm sản phẩm thành công!");
      navigate("/admin/products");
    } catch (err) {
      message.error("Thêm sản phẩm thất bại!");
    }
  };

  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: 24 }}>
      <h2>Thêm sản phẩm</h2>
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              name="title"
              label="Tên sản phẩm"
              rules={[
                { required: true, message: "Vui lòng nhập tên sản phẩm" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="slug"
              label="Slug"
              rules={[{ required: true, message: "Vui lòng nhập slug" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="description"
              label="Mô tả"
              rules={[
                { required: true, message: "Vui lòng nhập mô tả sản phẩm" },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item
              name="thumbnail"
              label="Ảnh sản phẩm"
              valuePropName="fileList"
              getValueFromEvent={(e) => e && e.fileList}
              rules={[{ required: true, message: "Vui lòng tải ảnh" }]}
            >
              <Upload
                beforeUpload={() => false}
                maxCount={1}
                accept="image/*"
                listType="picture"
              >
                <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
              </Upload>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="priceDefault"
              label="Giá mặc định"
              rules={[{ required: true, message: "Vui lòng nhập giá" }]}
            >
              <InputNumber
                style={{ width: "100%" }}
                min={0}
                step={1000}
                formatter={(value) =>
                  `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/₫\s?|(,*)/g, "")}
              />
            </Form.Item>

            <Form.Item
              name="brand"
              label="Thương hiệu (Brand ID)"
              rules={[{ required: true, message: "Vui lòng nhập brand" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Danh mục"
              name="subCategory"
              rules={[{ required: true, message: "Vui lòng chọn danh mục" }]}
            >
              <Select placeholder="Chọn danh mục">
                {categories.map((cate) => (
                  <Select.Option key={cate._id} value={cate._id}>
                    {cate.title}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item style={{ textAlign: "right" }}>
          <Button type="primary" htmlType="submit">
            Thêm sản phẩm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ProductForm;
