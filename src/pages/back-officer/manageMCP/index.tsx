import React, { useState } from "react";
import { AssignMCPTable, ViewMCPTable } from "../../../components/back-officer";
import {
  Assignee,
  assigneeList,
  MCPViewProp,
  Status,
} from "../../../components/misc/constant";
const dummy: MCPViewProp[] = [
  {
    key: 1,
    id: 1,
    name: "MCP A-B",
    status: Status.READY,
    capacity: 69,
    distance: 100,
    assignee: assigneeList[2],
  },
  {
    key: 2,
    id: 2,
    name: "MCP A-F",
    status: Status.READY,
    capacity: 69,
    distance: 100,
  },
  {
    key: 3,
    id: 3,
    name: "MCP A-B",
    status: Status.READY,
    capacity: 69,
    distance: 100,
  },
  {
    key: 4,
    id: 4,
    name: "MCP A-B",
    status: Status.READY,
    capacity: 69,
    distance: 100,
  },
  {
    key: 5,
    id: 5,
    name: "MCP A-B",
    status: Status.READY,
    capacity: 69,
    distance: 100,
  },
];

const BackOfficerMCP = () => {
  const [step, setStep] = useState<number>(0);
  const [pickedMCP, setPickedMCP] = useState<MCPViewProp>(null);
  const [data, setData] = useState<MCPViewProp[]>(dummy);

  const assign2MCP = (assignee: Assignee) => {
    const target = Object.assign(pickedMCP, { assignee });
    const index = data.findIndex((item) => item === pickedMCP);

    if (index !== -1) {
      data[index] = target;
    }
    console.log(">>>>> data", data);
    setData(data);
  };

  return (
    <div>
      {step === 0 ? (
        <ViewMCPTable
          setStep={setStep}
          data={data}
          pickMCP={(mcp: MCPViewProp) => setPickedMCP(mcp)}
        />
      ) : (
        <AssignMCPTable setStep={setStep} setData={assign2MCP} />
      )}
    </div>
  );
};

export default BackOfficerMCP;
