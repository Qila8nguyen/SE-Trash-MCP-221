import {
  Card,
  Avatar,
  Divider,
  List,
  Skeleton,
  message,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import VirtualList from "rc-virtual-list";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Search from "antd/lib/input/Search";
import { CloseOutlined } from "@ant-design/icons";

type ChatBoxProps = {
  setChatBox: any;
};

interface UserItem {
  email: string;
  gender: "F" | "M";
  name: string;
  picture: string;
}
const ContainerHeight = "75vh";

const dummy: UserItem[] = [
  {
    email: "binhan@gmail.com",
    gender: "F",
    name: "binhan",
    picture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    email: "binhan@gmail.com",
    gender: "F",
    name: "Mianan",
    picture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    email: "binhan@gmail.com",
    gender: "M",
    name: "EOJan",
    picture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    email: "okkhan@gmail.com",
    gender: "M",
    name: "han",
    picture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    email: "binhan@gmail.com",
    gender: "F",
    name: "binhan",
    picture:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
];

export const MessengerChatbox: React.FC<{
  className?: string;
  onClose: () => void;
}> = (props) => {
  const { className } = props;
  const [data, setData] = useState<UserItem[]>(dummy);

  const appendData = () => {
    // fetch(fakeDataUrl)
    //   .then((res) => res.json())
    //   .then((body) => {
    //     setData(data.concat(body.results));
    //     message.success(`${body.results.length} more items loaded!`);
    //   });
  };

  useEffect(() => {
    appendData();
  }, []);

  const onScroll = (e: React.UIEvent<HTMLElement, UIEvent>) => {
    if (
      e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
      ContainerHeight
    ) {
      appendData();
    }
  };

  return (
    <List className={classNames([styles.container])}>
      <div className={styles["contact-header"]}>
        <Typography.Title level={3}>Liên hệ</Typography.Title>
        <CloseOutlined
          onClick={() => {
            props.onClose();
          }}
        />
      </div>
      <Search placeholder="tìm kiếm" style={{ marginBottom: "10px" }} />
      <VirtualList
        data={data.concat(data).concat(data)}
        height={500}
        itemHeight={20}
        itemKey="email"
        onScroll={onScroll}
      >
        {(item: UserItem) => (
          <List.Item key={item.email}>
            <List.Item.Meta
              avatar={<Avatar src={item.picture} />}
              title={item.name}
              description={item.email}
            />
            <div>Content</div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};
