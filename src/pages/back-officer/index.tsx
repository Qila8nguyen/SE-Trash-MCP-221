import React, { useState } from "react";
import AssignMCPTable from "../../components/back-officer/mcp-assignment-table";
import ViewMCPTable from "../../components/back-officer/mcp-view";

const BackOfficerDashboard = () => {
  const [step, setStep] = useState<number>(0);

  return (
    <div>
      {step === 0 ? (
        <ViewMCPTable setStep={setStep} />
      ) : (
        <AssignMCPTable setStep={setStep} />
      )}
    </div>
  );
};

export default BackOfficerDashboard;
