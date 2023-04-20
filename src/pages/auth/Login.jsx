import { useCallback, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();

  const admin = { id: "admin", password: "123456" };
  const [userInfo, setUserInfo] = useState({ id: "", password: "" });

  const handleKeyDown = (event) => {
    const key = event.code;
    switch (key) {
      case "Enter":
        handleSignIn();
        break;
      default:
    }
  };
  const handleChangeForm = useCallback(
    (id, value) => {
      setUserInfo({ ...userInfo, [id]: value });
    },
    [userInfo]
  );

  const handleSignIn = useCallback(async () => {
    let isEqual = JSON.stringify(userInfo) === JSON.stringify(admin);
    console.log("로그인 여부: ", isEqual);
    if (isEqual) {
      console.log("로그인 성공");
      localStorage.setItem("username", userInfo.id);
      navigate("/main/home");
    }
  }, [navigate, userInfo]);
  useEffect(() => {
    console.log("uesrInfo: ", userInfo);
  }, [userInfo]);

  return (
    <LoginHeader>
      <LoginWrapper>
        <LoginBody>
          <LoginColumn>
            <LoginContent>
              <span
                style={{
                  marginLeft: "20%",
                  fontSize: 20,
                  color: "#dc3545",
                }}
              >
                Global Money Express (GME)
              </span>
              <FormWrapper>
                <InputIdWrapper>
                  <label
                    style={{
                      margin: 0,
                      display: "inline-block",
                      maxWidth: "100%",
                      color: "#4a4a4a",
                    }}
                  >
                    Username<span style={{ color: "#ED1C24" }}>*</span>
                  </label>
                  <input
                    className="username"
                    type="text"
                    placeholder="Enter Username"
                    onChange={(e) => handleChangeForm("id", e.target.value)}
                  />
                </InputIdWrapper>
                <br />
                <InputIdWrapper>
                  <label
                    style={{
                      margin: 0,
                      display: "inline-block",
                      maxWidth: "100%",
                      color: "#4a4a4a",
                    }}
                  >
                    Password<span style={{ color: "#ED1C24" }}>*</span>
                  </label>
                  <input
                    className="username"
                    type="text"
                    placeholder="Enter Password"
                    onChange={(e) =>
                      handleChangeForm("password", e.target.value)
                    }
                    onKeyDown={handleKeyDown}
                  />
                </InputIdWrapper>
                <button
                  type="submit"
                  className="login_button"
                  onClick={handleSignIn}
                >
                  LOGIN
                </button>
              </FormWrapper>
            </LoginContent>
          </LoginColumn>
        </LoginBody>
      </LoginWrapper>
    </LoginHeader>
  );
};
export default Login;
const LoginHeader = styled.header`
  @media screen and (min-width: 1400px) {
    padding-top: 150px;
  }
  position: relative;
  background-position: center;
  padding-top: 80px;
  padding-bottom: 30px;
  display: block;
  z-index: 1;
  color: #fff;
`;
const LoginWrapper = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (min-width: 1200px) {
    max-width: 1140px;
  }
`;
const LoginBody = styled.div`
  min-height: 500px;
  display: flex;
  flew-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
const LoginColumn = styled.div`
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  @media screen and (min-width: 992px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;
const LoginContent = styled.div`
  padding-top: 20px;
  padding-bottom: 1px;
  margin: auto;
  color: #4a4a4a;
  max-width: 450px;
  width: 100%;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 42px 18px rgba(74, 74, 74, 0.1);
`;
const FormWrapper = styled.div`
  padding: 30px 30px;
  .login_button {
    border-radius: 10px;
    width: 80%;
    margin: 25px;
    padding: 10px 10px;
    font-size: 20px;
    cursor: pointer;
    color: #ef343b;
    background-color: #fff;
    text-decoration: none;
    border-width: 1px;
    border-style: solid;
    &:hover {
      color: #fff;
      background-color: #ef343b;
    }
  }
`;
const InputIdWrapper = styled.div`
  border-radius: 5px;
  // border: 2px solid #ccc;
  padding: 10px 10px;
  position: relative;
  line-height: 1;
  box-sizing: border-box;
  .username {
    width: 90%;
    border: 2px solid #ccc;
    padding: 10px;
    font-size: 15px !important;
    color: #ed1c24;
    margin: 10px 0 0;
    line-height: 2;
    background-color: #fff;
    background-image: none;
    border-radius: 10px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    display: block;
    height: 34px;
    transition: border-color 0.15s ease-in-out 0s,
      box-shadow 0.15s ease-in-out 0s;
  }
`;
