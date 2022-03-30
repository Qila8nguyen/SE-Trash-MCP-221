import React from "react";
import { InfoCardItem } from "../../Dashboard";
import CircularProgressCard from "../../Dashboard/ProgressCard";
import styles from "./styles.module.scss";
import { Card } from "antd";

// title, amount, color = '#C8FACD', className, style, valueColor
const RightCardDetail = () => {
  return (
    <div className={styles["right-card"]} >
      <Card
        title="Right Card Details"
        style={{ marginBottom: 20, height: '100%'}}
      >
        <CircularProgressCard />
      </Card>
    </div>
  );
};

export default RightCardDetail;
