const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3307,
  user: "root",
  password: "alex324211",
  database: "login",
});

export default function login(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    const query = `SELECT * FROM users WHERE email = ? AND password = ?`;
    connection.query(query, [email, password], (err, result) => {
      if (err) {
        console.error("Failed to log in:", err);
        res
          .status(500)
          .json({ message: "Failed to log in. Please try again." });
        return;
      }

      if (result.length === 0) {
        res.status(401).json({ message: "Invalid email or password." });
      } else {
        // 로그인 성공 시 처리
        res.status(200).json({ message: "Login successful!" });
      }
    });
  } else {
    res.status(405).end(); // POST 요청만 허용
  }
}
