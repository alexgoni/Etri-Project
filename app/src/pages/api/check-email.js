import connection from "./DB";

export default function checkEmail(req, res) {
  const { email } = req.query;
  const query = `SELECT * FROM users WHERE username = ?`;
  connection.query(query, [email], (err, result) => {
    if (err) {
      console.error("Failed to check email:", err);
      res.status(500).json({ emailExists: false });
      return;
    }

    const emailExists = result.length > 0;
    res.status(200).json({ emailExists });
  });
}
