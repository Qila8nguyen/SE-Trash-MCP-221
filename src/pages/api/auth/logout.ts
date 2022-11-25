export default function logout(req, res) {
  console.log("signout :>>>");
  const header = req?.header;

  return res.status(200).json({
    status: "SIGNED_OUT",
  });
}
