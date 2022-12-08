export type MCPDetail = {
  name: string;
  lat: number;
  lng: number;
};

export interface MCPViewProp {
  key: number;
  id: number;
  name: string;
  status: Status;
  capacity: number;
  distance: number;
  assignee?: Assignee;
}

export type Assignee = {
  key: number;
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
};

export enum Status {
  READY = "READY",
  NOT_READY = "NOT READY",
}

export const MCPList = [
  {
    name: "A",
    lat: 10.0,
    lng: 23.0,
  },
  {
    name: "B",
    lat: 122.0,
    lng: 120.0,
  },
  {
    name: "C",
    lat: 30.0,
    lng: 28.0,
  },
  {
    name: "D",
    lat: 80.0,
    lng: 81.0,
  },
  {
    name: "E",
    lat: 99.0,
    lng: 89.7782,
  },
  {
    name: "F",
    lat: 18.999,
    lng: 20.324,
  },
];

export const assigneeList: Assignee[] = [
  {
    key: 1,
    id: "0xxxxxxx",
    name: "Nguyễn Văn Cừ",
    role: "Người thu gom",
    email: "a.nguyen@gmail.com",
    phone: "83838000923",
  },
  {
    key: 2,
    id: "032xxxxx",
    name: "Nguyễn Thị Ban",
    role: "Người thu gom",
    email: "a.nguyen@gmail.com",
    phone: "83838000923",
  },
  {
    key: 3,
    id: "0xxxxxxx",
    name: "Đào Như Mộng",
    role: "Người thu gom",
    email: "mong.nguyen@gmail.com",
    phone: "83838000923",
  },
  {
    key: 4,
    id: "11xxxxxxx",
    name: "Nguyễn Đỗ Trần Nhu KA",
    role: "Người thu gom",
    email: "kkka.nguyen@gmail.com",
    phone: "83838000923",
  },
  {
    key: 5,
    id: "32xxxxxxx",
    name: "Nhu Quất Nga",
    role: "Người thu gom",
    email: "nga.nguyen@gmail.com",
    phone: "0092838000923",
  },
];

export type Car = {
  id: number;
  key: number;
  status: "Available" | "Unavailable";
  capacity: number;
  licensePlate: string;
  assignee?: Assignee;
  type: "Xe chở rác" | "Xe";
};

export const cars: Car[] = [
  {
    id: 1,
    key: 1,
    status: "Available",
    capacity: 30,
    licensePlate: "72A-9999",
    assignee: assigneeList[2],
    type: "Xe chở rác",
  },
  {
    id: 2,
    key: 2,
    status: "Available",
    capacity: 50,
    licensePlate: "72A-9999",
    // assignee: assigneeList[2],
    type: "Xe chở rác",
  },
  {
    id: 3,
    key: 3,
    status: "Available",
    capacity: 20,
    licensePlate: "72A-9999",
    // assignee: assigneeList[2],
    type: "Xe chở rác",
  },
  {
    id: 4,
    key: 4,
    status: "Unavailable",
    capacity: 340,
    licensePlate: "72A-9999",
    assignee: assigneeList[2],
    type: "Xe chở rác",
  },
  {
    id: 5,
    key: 5,
    status: "Available",
    capacity: 99,
    licensePlate: "72A-9999",
    // assignee: assigneeList[2],
    type: "Xe chở rác",
  },
];
