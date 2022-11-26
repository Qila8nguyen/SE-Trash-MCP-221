import React from "react";
import { BadgeProps, Card, Timeline, Typography } from "antd";
import { Badge, Calendar } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const getListData = (value: moment.Moment) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
      ];
      break;
    case 10:
      listData = [
        { type: "warning", content: "This is warning event." },
        { type: "success", content: "This is usual event." },
        { type: "error", content: "This is error event." },
      ];
      break;
    case 15:
      listData = [
        { type: "warning", content: "This is warning event" },
        { type: "success", content: "This is very long usual event。。...." },
        { type: "error", content: "This is error event 1." },
        { type: "error", content: "This is error event 2." },
        { type: "error", content: "This is error event 3." },
        { type: "error", content: "This is error event 4." },
      ];
      break;
    default:
  }
  return listData || [];
};

const getMonthData = (value: moment.Moment) => {
  if (value.month() === 8) {
    return 1394;
  }
};

const CalendarHomepage: React.FC = () => {
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };

  const dateCellRender = (value: moment.Moment) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge
              status={item.type as BadgeProps["status"]}
              text={item.content}
            />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <Card style={{ marginBottom: "30px" }}>
        <Typography.Title level={2}>Today Timeline</Typography.Title>
        <Timeline mode="alternate">
          <Timeline.Item>Create a services site 2022-12-10</Timeline.Item>
          <Timeline.Item color="green">
            Solve initial network problems 2022-12-10
          </Timeline.Item>
          <Timeline.Item
            dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Timeline.Item>
          <Timeline.Item color="red">
            Network problems being solved 2022-12-10
          </Timeline.Item>
          <Timeline.Item>Create a services site 2022-12-10</Timeline.Item>
          <Timeline.Item
            dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
          >
            Technical testing 2022-12-10
          </Timeline.Item>
        </Timeline>
      </Card>

      <Card>
        <Typography.Title level={2}>Yesterday Timeline</Typography.Title>
        <Timeline mode="alternate">
          <Timeline.Item>Create a services site 2022-12-9</Timeline.Item>
          <Timeline.Item color="green">
            Solve initial network problems 2022-12-9
          </Timeline.Item>
          <Timeline.Item
            dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </Timeline.Item>
          <Timeline.Item color="red">
            Network problems being solved 2022-12-9
          </Timeline.Item>
          <Timeline.Item>Create a services site 2022-12-9</Timeline.Item>
          <Timeline.Item
            dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
          >
            Technical testing 2022-12-9
          </Timeline.Item>
        </Timeline>
      </Card>
    </>
  );
};

export default CalendarHomepage;
