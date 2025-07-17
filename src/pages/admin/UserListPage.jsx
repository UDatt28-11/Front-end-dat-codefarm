import React, { useEffect, useState } from "react";
import {
  Table,
  Avatar,
  Tag,
  Button,
  Space,
  Modal,
  Descriptions,
  Popconfirm,
  message,
  Spin,
} from "antd";
import { EyeOutlined, StopOutlined, UnlockOutlined } from "@ant-design/icons";
import { getAllUsers } from "./../../api/userApi";

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getAllUsers();
        // console.log(res.data.data);
        setUsers(res.data.data); // Đặt lại dữ liệu
      } catch (err) {
        message.error("Lỗi khi tải danh sách người dùng!");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar) => (
        <Avatar
          src={
            avatar ||
            "https://static.vecteezy.com/system/resources/previews/009/292/244/large_2x/default-avatar-icon-of-social-media-user-vector.jpg"
          }
        />
      ),
    },
    {
      title: "Họ tên",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Quyền",
      dataIndex: "role",
      key: "role",
      render: (role) => (
        <Tag color={role === "admin" ? "red" : "blue"}>{role}</Tag>
      ),
    },
    {
      title: "Xác thực",
      dataIndex: "isVerified",
      key: "isVerified",
      render: (isVerified) => (
        <Tag color={isVerified ? "green" : "orange"}>
          {isVerified ? "Đã xác thực" : "Chưa xác thực"}
        </Tag>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "isBlocked",
      key: "isBlocked",
      render: (isBlocked) => (
        <Tag color={isBlocked ? "volcano" : "green"}>
          {isBlocked ? "Đang bị chặn" : "Đang hoạt động"}
        </Tag>
      ),
    },
    {
      title: "Hành động",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            icon={<EyeOutlined />}
            type="default"
            onClick={() => {
              setSelectedUser(record);
              setOpen(true);
            }}
          >
            Xem chi tiết
          </Button>
          <Popconfirm
            title={
              record.isBlocked
                ? "Bạn có muốn mở chặn người dùng này không?"
                : "Bạn có chắc muốn chặn người dùng này?"
            }
            onConfirm={() => {
              message.success(
                record.isBlocked
                  ? "Đã mở chặn người dùng!"
                  : "Đã chặn người dùng!"
              );
              // TODO: Gọi API cập nhật trạng thái người dùng ở đây
            }}
            okText="Xác nhận"
            cancelText="Hủy"
          >
            <Button
              danger={!record.isBlocked}
              type={record.isBlocked ? "primary" : "default"}
              icon={record.isBlocked ? <UnlockOutlined /> : <StopOutlined />}
            >
              {record.isBlocked ? "Mở chặn" : "Chặn"}
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Danh sách người dùng</h2>
      {loading ? (
        <Spin size="large" />
      ) : (
        <Table
          rowKey="_id"
          dataSource={users}
          columns={columns}
          bordered
          pagination={{ pageSize: 5 }}
        />
      )}

      <Modal
        title="Chi tiết người dùng"
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={600}
      >
        {selectedUser && (
          <Descriptions bordered column={1}>
            <Descriptions.Item label="Ảnh đại diện">
              <Avatar size={80} src={selectedUser.avatar} />
            </Descriptions.Item>
            <Descriptions.Item label="Họ tên">
              {selectedUser.fullName}
            </Descriptions.Item>
            <Descriptions.Item label="Email">
              {selectedUser.email}
            </Descriptions.Item>
            <Descriptions.Item label="Quyền">
              <Tag color={selectedUser.role === "admin" ? "red" : "blue"}>
                {selectedUser.role}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Xác thực">
              <Tag color={selectedUser.isVerified ? "green" : "orange"}>
                {selectedUser.isVerified ? "Đã xác thực" : "Chưa xác thực"}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Trạng thái">
              <Tag color={selectedUser.isBlocked ? "volcano" : "green"}>
                {selectedUser.isBlocked ? "Đang bị chặn" : "Đang hoạt động"}
              </Tag>
            </Descriptions.Item>
            <Descriptions.Item label="Địa chỉ">
              {selectedUser.address || "Chưa cập nhật"}
            </Descriptions.Item>
            <Descriptions.Item label="Tiểu sử">
              {selectedUser.bios || "Chưa cập nhật"}
            </Descriptions.Item>
            <Descriptions.Item label="Mạng xã hội">
              <div>Facebook: {selectedUser.socal?.facebook || "Chưa có"}</div>
              <div>Instagram: {selectedUser.socal?.instagram || "Chưa có"}</div>
              <div>Twitter: {selectedUser.socal?.twitter || "Chưa có"}</div>
            </Descriptions.Item>
            <Descriptions.Item label="Ngày tạo">
              {new Date(selectedUser.createdAt).toLocaleString("vi-VN")}
            </Descriptions.Item>
            <Descriptions.Item label="Cập nhật lần cuối">
              {new Date(selectedUser.updatedAt).toLocaleString("vi-VN")}
            </Descriptions.Item>
          </Descriptions>
        )}
      </Modal>
    </div>
  );
};

export default UserListPage;
