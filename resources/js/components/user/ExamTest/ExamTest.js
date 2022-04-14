import React from "react";
import Timer from "../Timer/Timer";
import defaultImg from "../../../assets/1_01_001.jpg";
const ExamTest = () => {
    return (
        <>
            <section className="section1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 p3 questionDiv">
                            <h4>Аль нь замын өргөнийг зөв заасан бэ</h4>
                            <img src={defaultImg} alt width="75%" />
                            <form action="#">
                                <div className="form-check">
                                    <label
                                        className="form-check-label"
                                        htmlFor="radio1"
                                    >
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            id="radio1"
                                            name="optradio"
                                            defaultValue="option1"
                                            defaultChecked
                                        />
                                        Option 1
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label
                                        className="form-check-label"
                                        htmlFor="radio2"
                                    >
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            id="radio2"
                                            name="optradio"
                                            defaultValue="option2"
                                        />
                                        Option 2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label
                                        className="form-check-label"
                                        htmlFor="radio3"
                                    >
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            id="radio3"
                                            name="optradio"
                                        />
                                        Option 3
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Шалгах
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 p3 questionDiv">
                            <h4>Аль нь замын өргөнийг зөв заасан бэ</h4>
                            <img src={defaultImg} alt width="75%" />
                            <form action="#">
                                <div className="form-check">
                                    <label
                                        className="form-check-label"
                                        htmlFor="radio1"
                                    >
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            id="radio1"
                                            name="optradio"
                                            defaultValue="option1"
                                            defaultChecked
                                        />
                                        Option 1
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label
                                        className="form-check-label"
                                        htmlFor="radio2"
                                    >
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            id="radio2"
                                            name="optradio"
                                            defaultValue="option2"
                                        />
                                        Option 2
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label
                                        className="form-check-label"
                                        htmlFor="radio3"
                                    >
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            id="radio3"
                                            name="optradio"
                                        />
                                        Option 3
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Шалгах
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Timer />
        </>
    );
};

export default ExamTest;
