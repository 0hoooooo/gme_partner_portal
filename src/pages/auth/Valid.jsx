import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../component/Loading";

const Valid = (isLogin) => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(isLogin);
    if (isLogin) {
      navigate("/auth/login");
    }
  });
  return <Loading />;
};
export default Valid;
