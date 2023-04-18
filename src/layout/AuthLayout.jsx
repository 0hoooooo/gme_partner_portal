import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Loading from "../component/Loading";

const AuthLayout = () => {
  const [loading, setLoading] = useState(false);
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

  return loading === false ? (
    <Loading />
  ) : (
    <AuthWrapper>
      <Outlet />
    </AuthWrapper>
  );
};
const AuthWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.white};
`;
export default AuthLayout;
