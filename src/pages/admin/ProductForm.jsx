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
  Space,
  Divider,
} from "antd";
import { UploadOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../api/categoryApi";

import { createProduct } from "../../api/productApi";
import { getAllColors } from "../../api/colorApi";
import { getAllSizes } from "../../api/sizeApi";
import { getAllBrand } from "../../api/brandApi";

const ProductForm = () => {
  const [form] = Form.useForm();
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [variants, setVariants] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [res1, res2, res3, res4] = await Promise.all([
          getAllCategories(),
          getAllColors(),
          getAllSizes(),
          getAllBrand(),
        ]);
        setCategories(res1.data?.data || []);
        setColors(res2.data?.data || []);
        setSizes(res3.data?.data || []);
        setBrands(res4.data?.data || []);
      } catch (error) {
        message.error("Không thể tải dữ liệu!");
      }
    };
    fetchData();
  }, []);

  const handleAddVariant = () => {
    setVariants([
      ...variants,
      { key: Date.now(), colorId: null, sizeId: null },
    ]);
  };

  const handleVariantChange = (key, field, value) => {
    setVariants((prev) =>
      prev.map((v) => (v.key === key ? { ...v, [field]: value } : v))
    );
  };

  const handleFinish = async (values) => {
    const formData = new FormData();

    formData.append("title", values.title);
    formData.append("slug", values.slug);
    formData.append("description", values.description);
    formData.append("price", values.price);
    formData.append("brand", values.brand);
    formData.append("subCategory", values.subCategory);
    formData.append("thumbnail", values.thumbnail?.[0]?.originFileObj);

    formData.append(
      "variants",
      JSON.stringify(
        variants.map((v) => ({
          colorId: v.colorId,
          sizeId: v.sizeId,
          stock: v.stock,
          price: v.price,
          oldPrice: v.oldPrice || 0,
        }))
      )
    );

    try {
      await createProduct(formData);
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
              rules={[{ required: true, message: "Vui lòng nhập mô tả" }]}
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
                listType="picture"
              >
                <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
              </Upload>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              name="price"
              label="Giá mặc định"
              rules={[{ required: true, message: "Vui lòng nhập giá" }]}
            >
              <InputNumber style={{ width: "100%" }} min={0} step={1000} />
            </Form.Item>

            <Form.Item
              name="brand"
              label="Thương hiệu"
              rules={[{ required: true, message: "Vui lòng chọn thương hiệu" }]}
            >
              <Select placeholder="Chọn thương hiệu">
                {brands.map((brand) => (
                  <Select.Option key={brand._id} value={brand._id}>
                    {brand.name}
                  </Select.Option>
                ))}
              </Select>
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

        <Divider>Biến thể sản phẩm</Divider>

        {variants.map((variant, index) => (
          <Row gutter={16} key={variant.key} style={{ marginBottom: 12 }}>
            <Col span={6}>
              <Select
                placeholder="Màu sắc"
                value={variant.colorId}
                onChange={(val) =>
                  handleVariantChange(variant.key, "colorId", val)
                }
                style={{ width: "100%" }}
              >
                {colors.map((c) => (
                  <Select.Option key={c._id} value={c._id}>
                    {c.name}
                  </Select.Option>
                ))}
              </Select>
            </Col>
            <Col span={6}>
              <Select
                placeholder="Size"
                value={variant.sizeId}
                onChange={(val) =>
                  handleVariantChange(variant.key, "sizeId", val)
                }
                style={{ width: "100%" }}
              >
                {sizes.map((s) => (
                  <Select.Option key={s._id} value={s._id}>
                    {s.name}
                  </Select.Option>
                ))}
              </Select>
            </Col>
            <Col span={4}>
              <InputNumber
                placeholder="Giá"
                min={0}
                value={variant.price}
                onChange={(val) =>
                  handleVariantChange(variant.key, "price", val)
                }
                style={{ width: "100%" }}
              />
            </Col>
            <Col span={4}>
              <InputNumber
                placeholder="Tồn kho"
                min={0}
                value={variant.stock}
                onChange={(val) =>
                  handleVariantChange(variant.key, "stock", val)
                }
                style={{ width: "100%" }}
              />
            </Col>
          </Row>
        ))}

        <Form.Item>
          <Button icon={<PlusOutlined />} onClick={handleAddVariant}>
            Thêm biến thể
          </Button>
        </Form.Item>

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
