import { useEffect } from "react";
import styled from "styled-components";
import KOREAN from "../assets/img/krw.png";
import USA from "../assets/img/usd.png";
const Home = () => {
  return (
    <HomeWrapper>
      <HomeContent>
        <TopWrapper>
          <Available>Available Balance</Available>
        </TopWrapper>
        <BottomWrapper>
          <KoreaBalanceWrapper>
            <KoreanBalanceContent>
              <span style={{ fontSize: 20 }}>
                <img
                  style={{
                    borderRadius: 20,
                    height: 60,
                    boxShadow: "0 0 50px 20px rgba(50, 50, 50, 0.1)",
                  }}
                  className="wpml-ls-flag"
                  src={KOREAN}
                  alt=""
                />
                <h4>KRW</h4>
              </span>
              <KoreanBalance>
                <span style={{ textAlign: "center", fontSize: 30 }}>0</span>
              </KoreanBalance>
            </KoreanBalanceContent>
          </KoreaBalanceWrapper>
          <UsaBalanceWrapper>
            <UsaBalanceContent>
              <span style={{ fontSize: 20 }}>
                <img
                  style={{
                    borderRadius: 20,
                    height: 60,
                    width: 90,
                    boxShadow: "0 0 50px 20px rgba(50, 50, 50, 0.1)",
                  }}
                  className="wpml-ls-flag"
                  src={USA}
                  alt=""
                />
                <h4>USD</h4>
              </span>
              <UsaBalance>
                <span style={{ textAlign: "center", fontSize: 30 }}>0</span>
              </UsaBalance>
            </UsaBalanceContent>
          </UsaBalanceWrapper>
        </BottomWrapper>
      </HomeContent>
    </HomeWrapper>
  );
};
export default Home;
const HomeWrapper = styled.div`
  display: flex;
  flex: 1;
  margin: 0px auto;
  padding: 50px;
`;
const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  border-color: #bce8f1;
  // border: 2px solid black;
  box-shadow: 0 0 50px 20px rgba(74, 74, 74, 0.1);
  border-radius: 10px;
  padding: 50px;
  background-color: white;
`;
const TopWrapper = styled.div`
  @media screen and (min-width: 992px) {
    float: left;
    width: 100%;
  }
`;
const BottomWrapper = styled.div`
  display: flex;
  padding-top: 50px;
  flex-direction: row;
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
  border-color: #bce8f1;
  padding-top: 20px;
  border: 1px solid transparent;
`;
const KoreaBalanceWrapper = styled.div`
  @media screen and (min-width: 992px) {
    float: left;
    width: 50%;
  }
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;

const KoreanBalanceContent = styled.div`
  height: 200px;
  border-radius: 50px;
  // background-color: #ff6961;
  text-align: center;
  padding-top: 20px;
`;

const KoreanBalance = styled.div`
  text-align: center;
  padding-top: 20px;
`;
const UsaBalance = styled.div`
  text-align: center;
  padding-top: 20px;
`;
const UsaBalanceWrapper = styled.div`
  @media screen and (min-width: 992px) {
    float: left;
    width: 50%;
  }
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
`;
const UsaBalanceContent = styled.div`
  height: 200px;
  border-radius: 50px;
  // background-color: #ff6961;
  text-align: center;
  padding-top: 20px;
`;
