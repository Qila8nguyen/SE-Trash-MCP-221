import { Button, Modal, Space, Table, Typography } from "antd";
import React, { useState } from "react";
import type { ColumnsType } from "antd/es/table";
import { ArrowLeftOutlined } from "@ant-design/icons";

interface Assignee {
  key: number;
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
}

const dummy: Assignee[] = [
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

type AssignMCPTableProps = {
  setStep: any;
};

export const AssignMCPTable = (props: AssignMCPTableProps) => {
  const { setStep } = props;

  const [dataSource, setDataSource] = useState(dummy);
  const [pickedAssignee, setPickedAssignee] = useState<Assignee>(null);
  const [openAssignModal, setOpenAssignModal] = useState<boolean>(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);

  const onOkAssignModal = () => {
    setOpenAssignModal(false);
    // assign :>>>
  };

  const onCancelAssignModal = () => {
    setOpenAssignModal(false);
  };

  const onCancelDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const onOkDeleteModal = () => {
    setDataSource(dataSource.filter((item) => item !== pickedAssignee));
    setOpenDeleteModal(false);
  };

  const onAssignToMCP = (value: Assignee) => {
    // :>>>>
    console.log("value", value);
    setPickedAssignee(value);
    setOpenAssignModal(true);
  };

  const onDeleteAssignee = (value: Assignee) => {
    setPickedAssignee(value);
    setOpenDeleteModal(true);
  };

  const back2ViewMCP = () => {
    setStep(0);
  };

  const columns: ColumnsType<Assignee> = [
    {
      title: "Mã",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tên",
      dataIndex: "name",
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
    {
      title: "",
      dataIndex: "action",
      key: "action",
      render: (_, value: Assignee) => {
        return (
          <Space size="middle">
            <Button type="primary" onClick={() => onAssignToMCP(value)}>
              Assign
            </Button>
            <Button onClick={() => onDeleteAssignee(value)}>Delete</Button>
          </Space>
        );
      },
    },
  ];
  return (
    <>
      <Modal
        open={openAssignModal}
        onCancel={onCancelAssignModal}
        onOk={onOkAssignModal}
      >
        <Typography.Title level={3}>
          {"Bạn có muốn phân công cho MCP?"}
        </Typography.Title>
      </Modal>
      <Modal
        open={openDeleteModal}
        onCancel={onCancelDeleteModal}
        onOk={onOkDeleteModal}
      >
        <Typography.Title level={3}>
          {"Bạn có muốn xóa người nhân viên này?"}
        </Typography.Title>
      </Modal>
      <div className="flex-row">
        <Typography.Title level={2}>{"MCP Asssignment"}</Typography.Title>
        <ArrowLeftOutlined onClick={back2ViewMCP} />
      </div>
      <Table columns={columns} dataSource={dataSource} />
    </>
  );
};

// export const AssignMCPTable;
