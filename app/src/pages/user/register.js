import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

// const MainContainer = styled.div`
//   background-color: #021c2d;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
// `;

// const LoginDiv = styled.div`
//   background-color: rgba(255, 255, 255, 0.3);
//   padding: 20px;
//   border-radius: 10px;

//   form {
//     margin-top: 10px;
//     margin-bottom: 10px;
//     max-width: 300px;
//     .profile-image {
//       width: 150px;
//       height: 150px;
//       background-image: url("/profile.jfif");
//       background-size: cover;
//       background-position: center;
//       border-radius: 50%;
//       margin: 0 auto 20px;
//     }
//     input {
//       margin-bottom: 10px;
//       width: 300px;
//       height: 25px;
//       border-radius: 4px;
//       text-indent: 1.8rem;

//       &:active,
//       &:focus {
//         outline: none;
//       }
//     }
//     .email {
//       background-image: url("/person.png");
//       background-repeat: no-repeat;
//       background-size: 22px;
//       background-position: 3px center;
//     }
//     .password {
//       background-image: url("/lock.png");
//       background-repeat: no-repeat;
//       background-size: 22px;
//       background-position: 3px center;
//     }
//     button {
//       display: block;
//       width: 300px;
//       padding: 7px;
//       background-color: black;
//       color: white;
//       border: none;
//       border-radius: 5px;
//       font-size: 14px;
//       cursor: pointer;
//       margin-top: 3px;
//     }
//   }
// `;

// const Select = styled.select`
//   margin-bottom: 10px;
//   width: 300px;
//   height: 25px;
//   border-radius: 2px;
//   text-indent: 1.8rem;
// `;

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPW] = useState("");
  const [PWConfirm, setPWConfirm] = useState("");
  // const [building, setBuilding] = useState("");

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== PWConfirm) {
      alert("Passwords do not match");
      return;
    }

    try {
      const checkResponse = await axios.get(`/api/check-email?email=${email}`);
      const emailExists = checkResponse.data.emailExists;

      if (emailExists) {
        alert("Email already exists");
        return;
      }

      const response = await axios.post("/api/register", {
        email,
        password,
        building,
      });
      alert("Registration successful");
      router.push("/user/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* <MainContainer>
        <LoginDiv>
          <form onSubmit={handleSubmit}>
            <div className="profile-image"></div>

            <input
              className="email"
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />

            <input
              className="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPW(e.currentTarget.value)}
            />

            <input
              className="password"
              type="password"
              value={PWConfirm}
              placeholder="Password Confirm"
              onChange={(e) => setPWConfirm(e.currentTarget.value)}
            />

            <Select
              value={building}
              onChange={(e) => setBuilding(e.currentTarget.value)}
            >
              <option value="">Select a building</option>
              <option value="1">빌딩1</option>
              <option value="2">빌딩2</option>
              <option value="3">빌딩3</option>
              <option value="4">빌딩4</option>
              <option value="5">빌딩5</option>
              <option value="6">빌딩6</option>
              <option value="7">빌딩7</option>
              <option value="8">빌딩8</option>
              <option value="9">빌딩9</option>
              <option value="10">빌딩10</option>
            </Select>

            <button className="mt-2 hover:bg-gray-800">Register</button>
          </form>
        </LoginDiv>
      </MainContainer> */}
      <div className="bg-gray-200 flex justify-center items-center h-screen">
        <div className="flex bg-white shadow-xl">
          <img
            src="/register-image.jpg"
            alt="register"
            className="w-96 h-96 md:h-auto object-cover md:col-span-2 hidden lg:block"
          />

          <form onSubmit={handleSubmit} className="p-7">
            <div className="flex items-center mb-20">
              <img src="/logo.jpg" alt="logo" className="w-9 h-9" />
              <span className="text-gray-700 font-semibold font-borel text-lg pt-3">
                KETI
              </span>
            </div>

            <div className="px-16">
              <div className="my-7">
                <h1 className="text-5xl font-black font-borel  text-center">
                  Register
                </h1>
                <p className="text-gray-500 text-center">
                  Thank you for joining us!
                </p>
              </div>

              <div>
                <span className="font-ubuntu">Email</span>
                <input
                  type="email"
                  value={email}
                  className="w-full rounded-sm border-2 border-b-4 border-black focus:outline-none h-9 indent-2"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  required
                />
              </div>

              <div className="mt-2">
                <span className="font-ubuntu">Password</span>
                <input
                  type="password"
                  value={password}
                  className="w-full rounded-sm border-2 border-b-4 border-black focus:outline-none h-9 indent-2 tracking-widest"
                  placeholder="********"
                  onChange={(e) => setPW(e.currentTarget.value)}
                  required
                />
              </div>

              <div className="mt-2">
                <span className="font-ubuntu">Confirm PW</span>
                <input
                  type="password"
                  value={PWConfirm}
                  className="w-full rounded-sm border-2 border-b-4 border-black focus:outline-none h-9 indent-2 tracking-widest"
                  placeholder="********"
                  onChange={(e) => setPWConfirm(e.currentTarget.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-black w-full text-white mt-8 text-center rounded-md p-2 cursor-pointer hover:bg-teal-500"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
