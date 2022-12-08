import { Button, Modal, Space, Table, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import {
  Assignee,
  assigneeList,
  MCPDetail,
  MCPViewProp,
  Status,
} from "../misc/constant";
import NewRouteFormModal from "../modal/form";
import Polyline from "./polyline";

const { sin, cos, asin, acos } = Math;

type ViewMCPTableProps = {
  setStep: any;
  data: MCPViewProp[];
  pickMCP: (mcp: MCPViewProp) => void;
};

export const ViewMCPTable: React.FC<ViewMCPTableProps> = (
  props: ViewMCPTableProps
) => {
  const { setStep, data, pickMCP } = props;
  const [dataSource, setDataSource] = useState<MCPViewProp[]>(data);
  const [isVisibleDeleteModal, setIsVisibleDeleteModal] =
    useState<boolean>(false);
  const [deletedRow, setDeletedRow] = useState<MCPViewProp>(null);
  const [isFormNewRouteModal, setIsFormNewRouteModal] =
    useState<boolean>(false);

  const onOkDeleteModal = () => {
    setIsVisibleDeleteModal(false);
    setDataSource(dataSource.filter((item) => item !== deletedRow));
  };

  const onCancleDeleteModal = () => {
    setIsVisibleDeleteModal(false);
  };
  const onClickDelete = (keySelected: MCPViewProp) => {
    console.log("keySelected", keySelected);
    setIsVisibleDeleteModal(true);
    setDeletedRow(keySelected);
  };

  const onAddNewMCP = (
    src: MCPDetail,
    dest: MCPDetail,
    status: Status = Status.READY,
    capacity: number = 80.2
  ) => {
    const newRoute: MCPViewProp = {
      key: dataSource.length,
      id: dataSource.length,
      name: `MCP ${src.name} - ${dest.name}`,
      status,
      capacity,
      distance: parseFloat(
        (
          6378 *
          acos(
            sin(src.lat) * sin(dest.lat) +
              cos(src.lat) * cos(dest.lat) * cos(dest.lng - src.lng)
          )
        ).toFixed(3)
      ),
    };

    setDataSource([...dataSource, newRoute]);
    setIsFormNewRouteModal(false);
  };

  const onCancelRouteModal = () => {
    setIsFormNewRouteModal(false);
  };

  const onAssign = (value: MCPViewProp) => {
    setStep(1);
    console.log(">>>>> value", value);
    pickMCP(value);
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
      title: "Phân công",
      dataIndex: ["assignee", "name"],
      key: "assignee",
      render: (value: any) => (value ? value : "-"),
    },
    {
      title: "",
      key: "action",
      render: (_, record: MCPViewProp) => (
        <Space size="middle">
          <Button onClick={() => onAssign(record)}>Assign MCP</Button>
          <Button type="primary">Edit</Button>
          <Button onClick={() => onClickDelete(record)}>Delete</Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <NewRouteFormModal
        visible={isFormNewRouteModal}
        onOkAdd={onAddNewMCP}
        onCancel={onCancelRouteModal}
      />
      <Modal
        open={isVisibleDeleteModal}
        onOk={onOkDeleteModal}
        onCancel={onCancleDeleteModal}
      >
        <Typography.Title level={2}>
          {"Bạn có muốn xóa MCP này?"}
        </Typography.Title>
      </Modal>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography.Title level={2}>MCPs</Typography.Title>
        <Button type="primary" onClick={() => setIsFormNewRouteModal(true)}>
          Add New MCP Route
        </Button>
      </div>
      <Table columns={columns} dataSource={dataSource} />
      <Polyline />
    </div>
  );
};

// export default ViewMCPTable;
