import connection from "./DB";
import { v4 as uuidv4 } from "uuid";

export default function register(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Generate a random session ID
    const sessionId = uuidv4();

    // Insert user data into 'users' table
    const userQuery = `INSERT INTO users (username, password) VALUES (?, ?)`;
    connection.query(userQuery, [email, password], (err, userResult) => {
      if (err) {
        console.error("Failed to register:", err);
        res
          .status(500)
          .json({ message: "Failed to register. Please try again." });
        return;
      }

      // Insert session data into 'sessions' table
      const sessionQuery = `INSERT INTO sessions (session_id, username) VALUES (?, ?)`;
      connection.query(
        sessionQuery,
        [sessionId, email],
        (err, sessionResult) => {
          if (err) {
            console.error("Failed to create session:", err);
            res
              .status(500)
              .json({ message: "Failed to register. Please try again." });
            return;
          }

          res.status(200).json({ message: "Registration successful!" });
        }
      );
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
