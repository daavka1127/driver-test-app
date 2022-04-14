import React from "react";
import { Link } from "react-router-dom";

const HomeContent = () => {
    return (
        <section className="hero">
            <section></section>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="hero-content text-center">
                            <h1>Танай зорилго эсвэл урмын үг</h1>
                            <p className="intro">
                                Та өөрөө хичээвэл боломжгүй зүйл гэж үгүй
                            </p>
                            <Link
                                to="/lesson"
                                className="btn btn-fill btn-large btn-margin-right"
                            >
                                ХИЧЭЭЛ
                            </Link>
                            <Link
                                to="/exam"
                                className="btn btn-fill btn-large btn-margin-right"
                            >
                                шалгалт
                            </Link>
                            <Link
                                to="/exercise"
                                className="btn btn-fill btn-large btn-margin-right"
                            >
                                дасгал
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="down-arrow floating-arrow">
                <Link to="#counterID">
                    <i className="fa fa-angle-down" />
                </Link>
            </div>
        </section>
    );
};

export default HomeContent;
