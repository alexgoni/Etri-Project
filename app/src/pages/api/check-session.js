import connection from "./DB";

export default function checkSession(req, res) {
  const { sessionId } = req.query;
  const sessionQuery = `SELECT session_id FROM sessions WHERE session_id = ?`;
  connection.query(sessionQuery, [sessionId], (err, result) => {
    if (err) {
      console.error("Failed to check session:", err);
      res.status(500).json({ isLoggedIn: false });
      return;
    }

    const isLoggedIn = result.length > 0; // 세션 ID가 세션 DB에 존재하면 로그인 상태로 간주
    if (isLoggedIn) {
      res.status(200).json({ isLoggedIn });
    } else {
      console.log(`Session ID '${sessionId}' not found in the session DB.`);
      res.status(200).json({ isLoggedIn });
    }
  });
}

export const config = {
  api: {
    externalResolver: true,
  },
};
