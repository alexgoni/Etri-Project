import { sequelize, User } from './DB';
import jwt from 'jsonwebtoken';
import performanceNow from 'performance-now';


export default function login(req, res) {
  if (req.method === 'POST') {
    const { email, password, building } = req.body;

    // 시작 시간 측정
    const startTime = performanceNow();

    User.findOne({ where: { username: email, password, building } })
      .then((user) => {
        if (!user) {
          res.status(401).json({ message: 'Invalid email or password.' });
          return;
        }

        // JWT 생성
        const secretKey = `${process.env.NEXT_PUBLIC_SECRET_KEY}`;
        const token = jwt.sign({ email: user.username }, secretKey);

        // login 성공시 쿠키 발행
        res.setHeader('Set-Cookie', `token=${token}; Path=/; Max-Age=3600`);
        res.status(200).json({ message: 'Login successful!' });

        // 종료 시간 측정 및 소요 시간 계산
        const endTime = performanceNow();
        const elapsedTime = endTime - startTime;
        console.log(`Database request took ${elapsedTime.toFixed(3)} milliseconds`);
      })
      .catch((err) => {
        console.error('Failed to log in:', err);
        res.status(500).json({ message: 'Failed to log in. Please try again.' });
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
