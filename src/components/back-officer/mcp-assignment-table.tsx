import { Table } from "antd";
import React, { useState } from "react";

const dummy = [
  {
    key: 1,
    id: "0xxxxxxx",
    name: "Nguyễn Văn A",
    role: "Người thu gom",
    email: "a.nguyen@gmail.com",
    phone: "83838000923",
  },
  {
    key: 2,
    id: "0xxxxxxx",
    name: "Nguyễn Văn A",
    role: "Người thu gom",
    email: "a.nguyen@gmail.com",
    phone: "83838000923",
  },
  {
    key: 3,
    id: "0xxxxxxx",
    name: "Nguyễn Văn A",
    role: "Người thu gom",
    email: "a.nguyen@gmail.com",
    phone: "83838000923",
  },
  {
    key: 4,
    id: "11xxxxxxx",
    name: "Nguyễn Thị KA",
    role: "Người thu gom",
    email: "kkka.nguyen@gmail.com",
    phone: "83838000923",
  },
  {
    key: 5,
    id: "32xxxxxxx",
    name: "Nguyễn Văn A",
    role: "Người thu gom",
    email: "a.nguyen@gmail.com",
    phone: "83838000923",
  },
];

const AssignMCPTable = () => {
  const [dataSource, setDataSource] = useState(dummy);
  const columns = [
    {
      title: "Mã",
      dataIndex: "mã",
      key: "id",
    },
    {
      title: "Tên",
      dataIndex: "tên",
      key: "name",
    },
    {
      title: "Vị trí",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "SĐT",
      dataIndex: "phone",
      key: "phone",
    },
  ];
  return <Table columns={columns} dataSource={dataSource} />;
};

export default AssignMCPTable;
