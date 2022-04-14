import React from "react";

const Footer = () => {
    return (
        <>
            <div class="newTopFixed">
                <a href="#top" class="">
                    <i class="fa fa-angle-up pulse2"></i>
                </a>
            </div>
            <div className="with_top" />
            <footer>
                {/* <div class="with_top"></div> */}
                <div className="container">
                    <div className="row">
                        <div className="widget col-lg-3 col-md-3 col-sm-12">
                            <h4 className="title">Бидний тухай</h4>
                            <p className="title-p">
                                Таны байгууллагын дэлгэрэнгүй танилцуулга
                                байршиж болно доор дэлгэрэнгүй дараад томоор
                                харах боломжтой..
                            </p>
                            <a className="readmore" href="#">
                                дэлгэрэнгүй
                            </a>
                        </div>
                        {/* end widget */}
                        <div className="widget col-lg-3 col-md-3 col-sm-12">
                            <h4 className="title">ЮУ Ч БАЙЖ БОЛНО</h4>
                            <ul className="recent_posts">
                                <li>
                                    <p className="title-p">Дурын талбар</p>
                                    <a className="readmore" href="#">
                                        дэлгэрэнгүй
                                    </a>
                                </li>
                            </ul>
                            {/* recent posts */}
                        </div>
                        {/* end widget */}
                        <div className="widget col-lg-3 col-md-3 col-sm-12">
                            <h4 className="title">ХОЛБОО БАРИХ</h4>
                            <ul className="contact_details">
                                <li>
                                    <i className="fa fa-envelope-o">
                                        {" "}
                                        info@yoursite.com
                                    </i>
                                </li>
                                <li>
                                    <i className="fa fa-phone-square">
                                        {" "}
                                        +7015-1678
                                    </i>
                                </li>
                                <li>
                                    <i className="fa fa-home">
                                        Байгууллагын хаяг дэлгэрэнгүй томоор
                                        бичих.
                                    </i>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-map-marker" /> Хаяг
                                        байршил
                                    </a>
                                </li>
                            </ul>
                            {/* contact_details */}
                        </div>
                        {/* end widget */}
                        <div className="widget col-lg-3 col-md-3 col-sm-12">
                            <h4 className="title">БАЙРШИЛ</h4>
                            <p className="title-p">
                                ГАЗРЫН ЗУРАГ ХАРУУЛЖ БОЛНО
                            </p>
                        </div>
                        {/* end widget */}
                    </div>
                </div>
                <br />
                <div className="container copyright">
                    <div className="row">
                        <p>
                            Бүх эрх хуулиар хамгаалагдсан © 2022 он
                            <a href="#"> Байгууллага нэр</a>.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
