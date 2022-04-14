import React from "react";
import bgImage from "../../../assets/blog-img-03.jpg";
const LessonCard = () => {
    return (
        <section className="section1">
            <div className="container">
                <div className="row">
                    <div className="col-md-8" />

                    <div className="input-group col-md-4">
                        <input
                            type="text"
                            className="form-control col-md-10"
                            placeholder="Хайх"
                        />
                        <div className="input-group-append ">
                            <button className="btn btn-success" type="submit">
                                Хайх
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 p-3">
                        <div className="card card-custom bg-white border-white border-0">
                            <div
                                className="card-custom-img"
                                style={{
                                    backgroundImage: "url(" + bgImage + ")",
                                }}
                            />
                            <div className="card-body">
                                <p className="card-text">
                                    Some example text to show the scrollbar.
                                    Some example text to show the scrollbar.
                                    1111show the scrollbar.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-3">
                        <div className="card card-custom bg-white border-white border-0">
                            <div
                                className="card-custom-img"
                                style={{
                                    backgroundImage: "url(" + bgImage + ")",
                                }}
                            />
                            <div className="card-body">
                                <p className="card-text">
                                    Some example text to show the scrollbar.
                                    Some example text to show the scrollbar.
                                    1111show the scrollbar.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-3">
                        <div className="card card-custom bg-white border-white border-0">
                            <div
                                className="card-custom-img"
                                style={{
                                    backgroundImage: "url(" + bgImage + ")",
                                }}
                            />
                            <div className="card-body">
                                <p className="card-text">
                                    Some example text to show the scrollbar.
                                    Some example text to show the scrollbar.
                                    1111show the scrollbar.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-3">
                        <div className="card card-custom bg-white border-white border-0">
                            <div
                                className="card-custom-img"
                                style={{
                                    backgroundImage: "url(" + bgImage + ")",
                                }}
                            />
                            <div className="card-body">
                                <p className="card-text">
                                    Some example text to show the scrollbar.
                                    Some example text to show the scrollbar.
                                    1111show the scrollbar.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-3">
                        <div className="card card-custom bg-white border-white border-0">
                            <div
                                className="card-custom-img"
                                style={{
                                    backgroundImage: "url(" + bgImage + ")",
                                }}
                            />
                            <div className="card-body">
                                <p className="card-text">
                                    Some example text to show the scrollbar.
                                    Some example text to show the scrollbar.
                                    1111show the scrollbar.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-3">
                        <div className="card card-custom bg-white border-white border-0">
                            <div
                                className="card-custom-img"
                                style={{
                                    backgroundImage: "url(" + bgImage + ")",
                                }}
                            />
                            <div className="card-body">
                                <p className="card-text">
                                    Some example text to show the scrollbar.
                                    Some example text to show the scrollbar.
                                    1111show the scrollbar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LessonCard;
