import styled from "@emotion/styled";
import { useState } from "react";

const MainContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),
    url("/mainimg2.jpg");
  background-size: cover;
`;

const LoginDiv = styled.div`
  width: 50%;
  max-width: 360px;
  margin: 0 auto;

  height: 100vh;
  padding-top: 10rem;
  form {
    width: 100%;
    padding: 20px;
    box-shadow: 0px 19px 38px rgba(0, 0, 0, 0.03),
      0px 15px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.92);
    border-radius: 8px;

    input {
      border-radius: 10px;
      border: 1px solid #c6c6c6;
      padding: 5px;
      margin-bottom: 10px;

      &:active,
      &:focus {
        outline: none;
      }
    }
    button {
      border-radius: 15px;
      padding: 5px 10px;
      background-color: black;
      color: white;

      margin-top: 10px;
      &:hover {
        background-color: gray;
        color: black;
      }
    }
    label {
      margin-top: 20px;
      font-size: 80%;
      text-align: center;
    }
    @media (max-width: 756px) {
      width: 100%;
    }
  }
  @media (max-width: 756px) {
    width: 90%;
  }
`;
function Register() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [PW, setPW] = useState("");
  const [PWConfirm, setPWConfirm] = useState("");
  return (
    <>
      <MainContainer>
        <LoginDiv>
          <form>
            <div className="text-center" style={{ paddingBottom: "1rem" }}>
              <h1 className="font-bold text-4xl">
                ETRI
                <br />
                재난안전
              </h1>
            </div>

            <input
              type="name"
              value={Name}
              placeholder="이름"
              onChange={(e) => setName(e.currentTarget.value)}
            />

            <input
              type="email"
              value={Email}
              placeholder="이메일"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />

            <input
              type="password"
              value={PW}
              placeholder="비밀번호"
              onChange={(e) => setPW(e.currentTarget.value)}
            />

            <input
              type="password"
              value={PWConfirm}
              placeholder="비밀번호 확인"
              onChange={(e) => setPWConfirm(e.currentTarget.value)}
            />
            <button>회원가입</button>
          </form>
        </LoginDiv>
      </MainContainer>
    </>
  );
}

export default Register;
