import connection from "./DB";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    const query = "SELECT password FROM users WHERE username = ?";
    connection.query(query, [email], (error, results) => {
      if (error) {
        console.error("비밀번호 조회에 실패했습니다:", error);
        res.status(500).json({ message: "비밀번호를 찾을 수 없습니다." });
      } else {
        if (results.length > 0) {
          const password = results[0].password;
          res.status(200).json({ password });
        } else {
          res
            .status(404)
            .json({ message: "해당 이메일로 등록된 계정이 없습니다." });
        }
      }
    });
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
};
