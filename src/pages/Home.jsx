import { useEffect } from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <HomeWrapper>
      <HomeContent>
        <TopWrapper>
          <Available>Available Balance</Available>
        </TopWrapper>
      </HomeContent>
    </HomeWrapper>
  );
};
export default Home;
const HomeWrapper = styled.div`
  display: flex;
  flex: 1;
  margin: 0px auto;
  padding: 0;
`;
const HomeContent = styled.div`
  border-color: #bce8f1;
`;
const TopWrapper = styled.div`
  @media screen and (min-width: 992px) {
    float: left;
    width: 100%;
  }
`;
const Available = styled.div`
  font-size: 70px;
  margin: auto;
  clear: both;
  text-align: center;
  border-radius: 25px;
  margin-top: 10px;
  font-weight: bold;
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
  padding: 15px;
  border: 1px solid transparent;
`;
