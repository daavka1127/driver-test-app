import React, { useEffect } from "react";

const Counts = () => {
    useEffect(() => {
        function count($this) {
            var current = parseInt($this.html(), 10);
            current = current + 1; /* Where 50 is increment */

            $this.html(++current);
            if (current > $this.data("count")) {
                $this.html($this.data("count"));
            } else {
                setTimeout(function () {
                    count($this);
                }, 50);
            }
        }

        $(".stat-count").each(function () {
            $(this).data("count", parseInt($(this).html(), 10));
            $(this).html("0");
            count($(this));
        });
    }, []);

    return (
        <section className="section1" id="counterID">
            <div className="container">
                <div className="general-title text-center">
                    <h3>ЗАРИМ СТАТИСТИК</h3>
                    <p>Таниас авах тестийн төрөл</p>
                    <hr />
                </div>
                <div className="stat f-container">
                    <div className="f-element col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <i className="fa fa-film fa-4x" />
                        <div className="milestone-counter">
                            <span className="stat-count highlight">42</span>
                            <div className="milestone-details">
                                Дүрмийн тестийн төрөл
                            </div>
                        </div>
                    </div>
                    <div className="f-element col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <i className="fa fa-laptop fa-4x" />
                        <div className="milestone-counter">
                            <span className="stat-count highlight">105</span>
                            <div className="milestone-details">
                                Дүрмийн тестийн төрөл
                            </div>
                        </div>
                    </div>
                    <div className="f-element col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <i className="fa fa-comments-o fa-4x" />
                        <div className="milestone-counter">
                            <span className="stat-count highlight">492</span>
                            <div className="milestone-details">
                                Дүрмийн тестийн төрөл
                            </div>
                        </div>
                    </div>
                    <div className="f-element col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <i className="fa fa-smile-o fa-4x" />
                        <div className="milestone-counter">
                            <span className="stat-count highlight">790</span>
                            <div className="milestone-details">
                                Дүрмийн тестийн төрөл
                            </div>
                        </div>
                    </div>
                </div>
                {/* end stat */}
            </div>
            <div className="general-title text-center">
                <hr />
            </div>
            {/* end container */}
        </section>
    );
};

export default Counts;
