import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../../assets/sedna-logo.png";
const Header = (props) => {
    return (
        <section className="hero1">
            <section className="navigation">
                <header>
                    <div className="header-content">
                        <div className="logo">
                            <Link to="/">
                                <img src={LogoImg} alt="Sedna logo" />
                            </Link>
                        </div>
                        <div className="header-nav">
                            <nav>
                                <ul className="primary-nav">
                                    <li className="active">
                                        <Link to="/">НҮҮР</Link>
                                    </li>
                                    <li>
                                        <Link to="/lesson">ХИЧЭЭЛ</Link>
                                    </li>
                                    <li>
                                        <Link to="/exam">ШАЛГАЛТ</Link>
                                    </li>
                                    <li>
                                        <Link to="/exercise">ДАСГАЛ</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="navicon">
                            <a className="nav-toggle" href="#">
                                <span />
                            </a>
                        </div>
                    </div>
                </header>
            </section>
            {/* HomeContent bairlana */}
        </section>
    );
};

export default Header;
