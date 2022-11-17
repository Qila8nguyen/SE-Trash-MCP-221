import { Button, Modal, Space, Table, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import GgMap from "./gg-map";
import Polyline from "./polyline";
import styles from "./styles.module.scss";

const apiKey = "AIzaSyBYJThjFIlEFgCDOKEzPRbEwdl2CfEmg4s";

interface MCPViewProp {
  key: number;
  name: string;
  status: string;
  capacity: number;
  distance: number;
}

const dummy: MCPViewProp[] = [
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

type ViewMCPTableProps = {
  setStep: any;
};

const ViewMCPTable = (props: ViewMCPTableProps) => {
  const { setStep } = props;
  const [dataSource, setDataSource] = useState<MCPViewProp[]>(dummy);
  const [isVisibleDeleteModal, setIsVisibleDeleteModal] =
    useState<boolean>(false);

  const onOkDeleteModal = () => {
    setIsVisibleDeleteModal(false);
  };

  const onCancleDeleteModal = () => {
    setIsVisibleDeleteModal(false);
  };
  const onClickDelete = (keySelected: MCPViewProp) => {
    // test :>>
    console.log("keySelected", keySelected);
    setIsVisibleDeleteModal(true);
    // setDataSource(dataSource.filter((item) => item !== keySelected));
  };

  const onAssign = (value: any) => {
    setStep(1);
  };
  const columns: ColumnsType<MCPViewProp> = [
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
    {
      title: "",
      key: "action",
      render: (_, record: MCPViewProp) => (
        <Space size="middle">
          <Button onClick={onAssign}>Assign MCP</Button>
          <Button type="primary">Edit</Button>
          <Button onClick={() => onClickDelete(record)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <div className={styles.container}>
      <Modal
        open={isVisibleDeleteModal}
        onOk={onOkDeleteModal}
        onCancel={onCancleDeleteModal}
      >
        {"Bạn có muốn xóa MCP này?"}
      </Modal>
      <Table columns={columns} dataSource={dataSource} />
      <Polyline
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div
            style={{
              height: `90vh`,
              margin: `auto`,
              border: "2px solid black",
            }}
          />
        }
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default ViewMCPTable;
