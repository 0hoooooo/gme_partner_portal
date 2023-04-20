import { useCallback, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Valid from "../pages/auth/Valid";
import Header from "../component/Header";

const MainLayout = () => {
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const user = localStorage.getItem("username");
  const navigate = useNavigate();
  const api = async () => {
    try {
      setLoading(true);
    } catch (e) {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      api();
    }, 1000);
  }, [loading]);

  useEffect(() => {
    console.log(localStorage.getItem("username"));
    if (user) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [user]);

  return !user ? (
    navigate("/auth/login")
  ) : (
    <MainWrapper>
      <Header />
      <MainBody>
        <Outlet />
      </MainBody>
      <MainFooter />
    </MainWrapper>
  );
};

export default MainLayout;
const MainWrapper = styled.div`
  min-width: 1300px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.white};
`;
const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100%;
  background: ${({ theme }) => theme.white};
`;
const MainFooter = styled.div`
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
