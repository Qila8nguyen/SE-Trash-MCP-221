import React from "react";
import { InfoCardItem } from "../../Dashboard";
import CircularProgressCard from "../../Dashboard/ProgressCard";
import styles from "./styles.module.scss";
import { Card } from "antd";

// title, amount, color = '#C8FACD', className, style, valueColor
const RightCardDetail = () => {
  return (
      <Card
        title="Right Card Details"
        style={{ height: '100%'}}
      >
        <CircularProgressCard />
      </Card>
  );
};

export default RightCardDetail;
