export default function tokenHandler(req, res) {
  return res.status(200).json({
    username: "nghi_ANYING",
    role: "back-officer",
    password: "new_pass",
  });
}
