import React, { useState } from "react";
import { AssignMCPTable, ViewMCPTable } from "../../../components/back-officer";

const BackOfficerMCP = () => {
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

export default BackOfficerMCP;
