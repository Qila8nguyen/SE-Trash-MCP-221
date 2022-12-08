import { Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import { MCPDetail, MCPList, Status } from "../misc/constant";

type ModalProps = {
  visible: boolean;
  onOkAdd: (
    newSrc: MCPDetail,
    newDest: MCPDetail,
    status?: Status,
    capacity?: number
  ) => void;
  onCancel: () => void;
};

const NewRouteFormModal: React.FC<ModalProps> = (props) => {
  const { visible, onOkAdd, onCancel } = props;
  const [mcpList, setMCPList] = useState<MCPDetail[]>(MCPList);
  const [newSrc, setSrc] = useState<MCPDetail>();
  const [newDest, setDest] = useState<MCPDetail>();

  useEffect(() => {
    setMCPList(MCPList.filter((item) => item !== newSrc));
    setMCPList(MCPList.filter((item) => item !== newDest));
  }, [newSrc, newDest]);

  const handleChangeSrc = (value: string) => {
    console.log(`selected ${value}`);
    const found = MCPList.find((item) => item.name === value);

    if (found) {
      setSrc(found);
    }
  };

  const handleChangeDest = (value: string) => {
    console.log(`selected ${value}`);
    const found = MCPList.find((item) => item.name === value);

    if (found) {
      setDest(found);
    }
  };
  return (
    <Modal
      open={visible}
      onOk={() => onOkAdd(newSrc, newDest)}
      onCancel={onCancel}
    >
      <Select
        defaultValue="No MCP selected"
        style={{ width: 120 }}
        onChange={handleChangeSrc}
        options={mcpList.map((mcp) => {
          return {
            value: mcp.name,
            label: mcp.name,
          };
        })}
      />
      <Select
        defaultValue="No MCP selected"
        style={{ width: 120 }}
        onChange={handleChangeDest}
        options={mcpList.map((mcp) => {
          return {
            value: mcp.name,
            label: mcp.name,
          };
        })}
      />
    </Modal>
  );
};

export default NewRouteFormModal;
