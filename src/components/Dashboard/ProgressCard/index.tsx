import React from "react";
import styles from "./styles.module.scss";
import { Progress } from "antd";

const CircularProgressCard = (props) => {
  const percent = (props.satistic / props.max) * 100;
  return (
    <div  /* style={{marginLeft: '50%', transform: 'translateX(-50%)'}}  */>
      <Progress
        className={styles.outer}
        strokeColor={{
          "0%": "#cfbaf0",
          "100%": "#90dbf4",
        }}
        width={220}
        percent={90}
        type="circle"
        format={() => (
          <Progress
            className={styles.middle}
            strokeColor={{
              "0%": "#cfbaf0",
              "100%": "#90dbf4",
            }}
            percent={70}
            width={180}
            type="circle"
            format={() => (
              <Progress
                className={styles.inner}
                strokeColor={{
                  "0%": "#cfbaf0",
                  "100%": "#90dbf4",
                }}
                percent={50}
                width={150}
                type="circle"
              />
            )}
          />
        )}
      />
    </div>
  );
};

export default CircularProgressCard;
