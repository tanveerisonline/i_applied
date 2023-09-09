// import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
// import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { ILogo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <ILogo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias cum
            sed omnis nam! Dolorum id eligendi necessitatibus doloremque impedit
            libero illum fugiat veniam. Ut consequuntur repellat accusantium
            fugiat! Dolorem, voluptatibus!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / demo access
          </Link>
        </div>
        <img src={main} alt="job-hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
