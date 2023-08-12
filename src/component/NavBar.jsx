import { styled } from "styled-components";
import { routes } from "../constants/routes";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const NavBar = () => {
  return (
    <NavView>
      <div className="content">
        <div className="logo">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "150px" }}
            className="img"
          />
        </div>

        <div className="routes">
          {routes.map((route) => {
            return (
              <Link key={route.path} className="links" to={route.path}>
                {route.name}
              </Link>
            );
          })}
        </div>
      </div>
    </NavView>
  );
};

const NavView = styled.div`
  margin: 6rem;
  padding: 1rem;

  .content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(83, 78, 51);

    .logo {
      width: 40%;
      padding: 1rem;
      height: 40%;
      // border: 1px gold solid;

      .img {
        width: 100%;
      }
    }

    .routes {
      padding: 2.45rem 1rem;
      width: 70%;
      height: 40%;
      border: 1px gold solid;

      .links {
        font-size: 14px;
        padding: 10px;
        margin: 10px;
        text-decoration: none;
      }
    }
  }
`;

export default NavBar;
