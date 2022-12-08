import {
  Button,
  Modal,
  Space,
  Table,
  Typography,
  Form,
  InputNumber,
  Input,
  Popconfirm,
} from "antd";
import { ColumnsType } from "antd/lib/table";
import React, { useState } from "react";
import { Car, cars } from "../../../components/misc/constant";

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: "number" | "text";
  record: Car;
  index: number;
  children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const CarManagement = () => {
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState(0);
  const [selectedKey, setSelectedKey] = useState<Car>(null);

  const isEditing = (record: Car) => record.key === editingKey;

  const edit = (record: Partial<Car>) => {
    console.log("record", record);
    form.setFieldsValue({
      id: "",
      licensePlate: "",
      status: "",
      capacity: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey(0);
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as Car;

      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey(0);
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey(0);
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };
  const [data, setData] = useState<Car[]>(cars);
  const onOkDeleteModal = () => {
    setData(data.filter((item) => item !== selectedKey));
    setIsVisibleDeleteModal(false);
  };

  const onCancleDeleteModal = () => {
    setIsVisibleDeleteModal(false);
  };
  const [isVisibleDeleteModal, setIsVisibleDeleteModal] =
    useState<boolean>(false);

  const onClickDelete = (keySelected: Car) => {
    console.log("keySelected", keySelected);
    setSelectedKey(keySelected);
    setIsVisibleDeleteModal(true);
  };

  const column1 = [
    {
      key: "No",
      title: "Số thứ tự",
      dataIndex: "id",
      render: (val: number, _) => {
        return `#${val}`;
      },
      editable: true,
    },
    {
      key: "licensePlate",
      title: "Biến số xe",
      dataIndex: "licensePlate",
      editable: true,
    },
    {
      key: "status",
      title: "Trạng thái",
      dataIndex: "status",
      editable: true,
    },
    {
      key: "capacity",
      title: "Sức chứa",
      dataIndex: "capacity",
      editable: true,
    },
    {
      key: "assignee",
      title: "Người sử dụng",
      dataIndex: ["assignee", "name"],
      render: (val: string, _) => {
        if (!val) {
          return "-";
        }
        return val;
      },
    },
    {
      title: "Thao tác",
      dataIndex: "operation",
      render: (_: any, record: Car) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <>
            <Typography.Link
              disabled={editingKey !== 0}
              onClick={() => edit(record)}
            >
              Edit
            </Typography.Link>
            <Button
              style={{ marginLeft: "20px" }}
              onClick={() => onClickDelete(record)}
            >
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  const mergedColumns = column1.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: Car) => ({
        record,
        inputType:
          col.dataIndex === "id" || col.dataIndex === "key" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div>
      <Modal
        open={isVisibleDeleteModal}
        onOk={onOkDeleteModal}
        onCancel={onCancleDeleteModal}
      >
        <Typography.Title level={2}>
          {"Bạn có muốn xóa xe này?"}
        </Typography.Title>
      </Modal>
      <Typography.Title level={2}>Sắp xếp Xe</Typography.Title>
      <Form form={form} component={false}>
        <Table
          dataSource={data}
          columns={mergedColumns}
          components={{
            body: {
              cell: EditableCell,
            },
          }}
        />
      </Form>
    </div>
  );
};
export default CarManagement;
