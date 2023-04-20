import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import Image from "../assets/img/logo.png";
const Header = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const LogOut = () => {
    localStorage.removeItem("username");
    navigate("/auth/login");
  };
  const Profile = () => {
    navigate("/mypage/profile");
  };
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <MenuUlLeft>
          <NavbarHeader>
            <a
              className="navbar_brand"
              onClick={() => window.location.reload()}
            >
              <img src={Image} className="brand_logo" alt="logo" />
            </a>
          </NavbarHeader>
          <MenuUl>
            <MenuNavUl>
              <li className="dropDown">
                <a className="dropDownToggle" onClick={(e) => e.preventDefault}>
                  Fund
                  <span className="caret"></span>
                </a>
                <ul className="dropDownMenu">
                  <li>
                    <a
                      className="gme_anchor"
                      href="/Pages/BalanceManagement/List.aspx"
                    >
                      Balance History
                    </a>
                  </li>
                  <li>
                    <a
                      className="gme_anchor"
                      href="/Pages/DepositHistory/List.aspx"
                    >
                      Deposit History
                    </a>
                  </li>
                  <li>
                    <a
                      className="gme_anchor"
                      href="/Pages/ExchangeFund/GridList.aspx"
                    >
                      Exchange Fund History
                    </a>
                  </li>
                  <li>
                    <a
                      className="gme_anchor"
                      href="/Pages/ExchangeFund/List.aspx"
                    >
                      Exchange Fund
                    </a>
                  </li>
                  <li>
                    <a
                      className="gme_anchor"
                      href="/Pages/VASettlement/Report.aspx"
                    >
                      Statement
                    </a>
                  </li>
                </ul>
              </li>
            </MenuNavUl>

            <MenuNavUl>
              <li className="dropDown">
                <a className="dropDownToggle" onClick={(e) => e.preventDefault}>
                  Transaction<span className="caret"></span>
                </a>
                <ul className="dropDownMenu">
                  <li>
                    <a
                      className="gme_anchor"
                      href="/Pages/CSVFileB2B/List.aspx"
                    >
                      Batch Upload
                    </a>
                  </li>
                  <li>
                    <a
                      className="gme_anchor"
                      href="/Pages/TransactionDetail/List.aspx"
                    >
                      Transaction Detail
                    </a>
                  </li>
                </ul>
              </li>
            </MenuNavUl>

            <MenuNavUl>
              <li className="dropDown">
                <a className="dropDownToggle" onClick={(e) => e.preventDefault}>
                  Virtual Account<span className="caret"></span>
                </a>
                <ul className="dropDownMenu">
                  <li>
                    <a
                      className="gme_anchor"
                      href="/Pages/CustomerVirtualAccount/List.aspx"
                    >
                      Management
                    </a>
                  </li>
                  <li>
                    <a
                      className="gme_anchor"
                      href="/Pages/VACollectionDetail/List.aspx"
                    >
                      Collection
                    </a>
                  </li>
                  <li>
                    <a
                      className="gme_anchor"
                      href="/Pages/VASettlement/List.aspx"
                    >
                      Settlement
                    </a>
                  </li>
                </ul>
              </li>
            </MenuNavUl>
          </MenuUl>
        </MenuUlLeft>

        <MenuUlRight>
          <li className="dropDown">
            <a href="#" data-toggle="dropdown" className="dropDownToggle">
              <span id="agentName">{username}</span>
              <b className="caret"></b>
            </a>
            <ul className="dropDownMenu">
              <li>
                <a className="gme_anchor" onClick={Profile}>
                  Profile
                </a>
              </li>
              <li>
                <a className="gme_anchor" onClick={LogOut}>
                  Sign Out
                </a>
              </li>
              <li>
                <a className="gme_anchor" href="Changepassword.aspx">
                  Change Password
                </a>
              </li>
            </ul>
          </li>
        </MenuUlRight>
      </HeaderContainer>
    </HeaderWrapper>
  );
};
export default Header;
const HeaderWrapper = styled.nav`
  background-color: #d2000b;
  border-color: transparent;
  top: 0;
  border-width: 0 0 1px;
  border-radius: 0;
  position: sticky;
  top: 0px;
  right: 0;
  left: 0;
  z-index: 1000;
  min-height: 30px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  justify-content: space-between;
`;
const HeaderContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const NavbarHeader = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    float: left;
    margin-right: 0;
    margin-left: 0;
  }
  .navbar_brand {
    cursor: pointer;
    padding: 10px 10px;
    font-size: 20px;
    line-height: 10px;
    background-color: transparent;
    @media screen and (min-width: 768px) {
      margin-left: 5px;
    }
  }
  .brand_logo {
    display: flex;
    object-fit: cover;
    width: 150px;
    height: 50px;
    cursor: pointer;
  }
`;

const MenuUl = styled.ul`
  display: flex;
  padding-left: 100px;
  list-style: none;
  @media screen and (min-width: 768px) {
    float: left;
    margin: 0;
  }
`;
const MenuUlLeft = styled.div`
  display: flex;
`;
const MenuNavUl = styled.ul`
  @media screen and (min-width: 768px) {
    float: left;
    margin: 0;
  }
  cursor: pointer;
  padding-left: 0;
  list-style: none;
  .dropDown {
    position: relative;
    display: inline-block;
    transition: all 0.3s ease-in-out;
    @media screen and (min-width: 768px) {
      float: left;
    }
    &:hover .dropDownMenu {
      position: absolute;
      overflow: hidden;
      left: 0;
      width: 100%;
      z-index: 1000;
      display: block;
      float: left;
      min-width: 200px;
      padding: 5px 0;
      margin: 1px 0 0;
      font-size: 15px;
      text-align: center;
      list-style: none;
      line-height: 30px;
      background-color: #d30000;
      background-clip: padding-box;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
      transition: height 0.3s ease-in-out;
      transition-delay: 0.5s;
    }
    .dropDownMenu {
      display: none;
    }
    .caret {
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: 10px;
      vertical-align: middle;
      border-top: 10px dashed;
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
    }
    .gme_anchor {
      display: block;
      padding: 10px 20px;
      clear: both;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.42857143;
      white-space: nowrap;
      color: #ffffff !important;
      background-color: #d2000b;
      text-decoration: none;
      text-underline-offset: 5px;
      &:hover {
        color: #fff;
        text-decoration: underline;
        text-underline-position: under;
        text-decoration-thickness: 3px;
      }
    }
  }
  .dropDownToggle {
    color: #ffffff;
    line-height: 20px;
    position: relative;
    display: block;
    padding: 20px 20px;
    font-size: 20px;
    text-decoration: none;
    background-color: transparent;
    @media screen and (min-width: 768px) {
      padding-top: 25px;
      padding-bottom: 25px;
    }
  }
`;
const MenuUlRight = styled.ul`
  @media screen and (min-width: 768px) {
    float: right !important;
    margin-right: -15px;
  }
  padding-left: 0;
  list-style: none;

  cursor: pointer;
  padding-left: 0;
  list-style: none;
  .dropDown {
    position: relative;
    display: inline-block;
    transition: all 0.3s ease-in-out;
    @media screen and (min-width: 768px) {
      float: left;
    }
    &:hover .dropDownMenu {
      position: absolute;
      overflow: hidden;
      left: 0;
      width: 100%;
      z-index: 1000;
      display: block;
      float: left;
      min-width: 100px;
      padding: 5px 0;
      margin: 1px 0 0;
      font-size: 15px;
      text-align: center;
      list-style: none;
      line-height: 40px;
      background-color: #d30000;
      background-clip: padding-box;
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
      transition: height 0.3s ease-in-out;
      transition-delay: 0.5s;
    }
    .dropDownMenu {
      display: none;
    }
    .caret {
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: 10px;
      vertical-align: middle;
      border-top: 10px dashed;
      border-right: 10px solid transparent;
      border-left: 10px solid transparent;
    }
    .gme_anchor {
      display: block;
      padding: 10px 10px;
      clear: both;
      font-weight: 400;
      line-height: 1.42857143;
      white-space: nowrap;
      color: #ffffff !important;
      background-color: #d2000b;
      text-decoration: none;
      &:hover {
        color: #fff;
        text-decoration: underline;
        text-underline-position: under;
        text-decoration-thickness: 3px;
      }
    }
  }
  .dropDownToggle {
    color: #ffffff;
    line-height: 20px;
    position: relative;
    display: block;
    padding: 20px 50px;
    font-size: 20px;
    text-decoration: none;
    background-color: transparent;
    @media screen and (min-width: 768px) {
      padding-top: 25px;
      padding-bottom: 25px;
    }
  }
`;
