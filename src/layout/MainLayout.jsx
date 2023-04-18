import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loading from "../component/Loading";
import Token from "../pages/auth/token";

const MainLayout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

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
    if (localStorage.getItem("username")) {
      setIsLogin(true);
    }
  }, []);

  useEffect(() => {
    isLogin === false ? (
      navigate("/auth/login")
    ) : (
      <MainWrapper>
        <MainBody>
          <Outlet />
        </MainBody>
        <MainFooter />
      </MainWrapper>
    );
  });
  return <Loading />;
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
