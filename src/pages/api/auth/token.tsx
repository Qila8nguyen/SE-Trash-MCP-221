import { getCookie, setCookie } from "cookies-next";

export default function tokenHandler(req, res) {
  const header = req?.header;
  console.log("header", header);
  const cookies = getCookie("User-Data");
  console.log("------ cookies", cookies);

  return res.status(200).json({
    username: "nghi_ANYING",
    role: "back-officer",
    password: "new_pass",
  });
}
