import jwt from "jsonwebtoken";
import connection from "./DB";

export default function login(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const query = `SELECT * FROM users WHERE username = ? AND password = ?`;
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
      }

      const user = result[0];

      // JWT 생성
      const secretKey = `${process.env.NEXT_PUBLIC_SECRET_KEY}`;
      const token = jwt.sign({ email: user.username }, secretKey);

      // login 성공시 쿠키 발행
      res.setHeader("Set-Cookie", `token=${token}; Path=/; Max-Age=3600`);
      res.status(200).json({ message: "Login successful!" });
    });
  } else {
    res.status(405).end();
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
