import React from "react";
import { Link } from 'react-router-dom';
import BMBDLogo from "../../images/best-movies-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles.js";

const Header = () => (
    <Wrapper>
        <Content>
            <Link to="/">
                <LogoImg src={BMBDLogo} alt="bmdb-logo" />
            </Link>
            <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
        </Content>
    </Wrapper>
);

export default Header;