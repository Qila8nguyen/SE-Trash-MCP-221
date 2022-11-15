import { Table, Typography } from "antd";
import React, { useState } from "react";

const dummy = [
  {
    key: 1,
    name: "MCP A-B",
    status: "ready",
    capacity: 69,
    distance: 100,
  },
  {
    key: 2,
    name: "MCP A-B",
    status: "ready",
    capacity: 69,
    distance: 100,
  },
  {
    key: 3,
    name: "MCP A-B",
    status: "ready",
    capacity: 69,
    distance: 100,
  },
  {
    key: 4,
    name: "MCP A-B",
    status: "ready",
    capacity: 69,
    distance: 100,
  },
  {
    key: 5,
    name: "MCP A-B",
    status: "ready",
    capacity: 69,
    distance: 100,
  },
];

const ViewMCPTable = () => {
  const [dataSource, setDataSource] = useState(dummy);

  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Tình trạng",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Sức chứa",
      dataIndex: "capacity",
      key: "capacity",
      render: (value: any) => <Typography.Text>{value} %</Typography.Text>,
    },
    {
      title: "Khoảng cách",
      dataIndex: "distance",
      key: "distance",
      render: (value: any) => <Typography.Text>{value} km</Typography.Text>,
    },
  ];
  return <Table columns={columns} dataSource={dataSource} />;
};

export default ViewMCPTable;
