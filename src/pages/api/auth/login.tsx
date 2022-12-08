const users = [
  {
    id: "nghindp",
    username: "nghi",
    password: "123456",
    role: "back-officer",
  },
  {
    id: "nhannt",
    username: "thanhnhan",
    password: "87654321",
    role: "back-officer",
  },
  {
    id: "bien",
    username: "longbien",
    password: "87654321",
    role: "janitor",
  },
];

export default function login(req, res) {
  console.log(":>>> req", req.body);
  const { username, password } = req.body;
  if (
    users.find((item) => item.username + item.password === username + password)
  ) {
    const user = users.find(
      (item) => item.username + item.password === username + password
    );
    res
      .status(200)
      .json({ role: user.role, id: user.id, username: user.username });
  } else {
    res.status(401).json({ message: "Cannot find this user" });
  }
}
