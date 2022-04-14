import React, { useState, useEffect } from "react";
import axios from "../../../AxiosUser";
import { Link, useParams } from "react-router-dom";

import CardNew from "../../../components/admin/Card/CardNew";
import AlertSuccess from "../../../components/admin/Alert/AlertSuccess";
import AlertError from "../../../components/admin/Alert/AlertError";

const Card = () => {
    const [cards, setCards] = useState([]);
    const [successMsg, setSuccessMsg] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        loadCards();
    }, []);

    const loadCards = () => {
        axios.get("/get/card").then((res) => {
            setCards(res.data);
        });
    };

    const clickDeleteCard = (id) => {
        // alert(id);
        let text =
            "Та карт устгахдаа итгэлтэй байна уу? Устгавал картын бүх мэдээлэл устах болно.";
        if (confirm(text)) {
            axios
                .post("/delete/card", {
                    id,
                })
                .then((res) => {
                    setSuccessMsg(res.data.msg);
                    setErrorMsg(null);
                    loadCards();
                })
                .catch((err) => {
                    setErrorMsg(err.response.data.msg);
                    setSuccessMsg(null);
                });
        }
    };

    return (
        <>
            <div className="container-flex">
                <div className="clearfix">
                    {successMsg && <AlertSuccess msg={successMsg} />}
                    {errorMsg && <AlertError msg={errorMsg} />}
                </div>
                <div className="row">
                    {cards.map((el) => (
                        <div
                            key={el.id}
                            className="card col-md-3"
                            width="304"
                            height="236"
                            style={{ width: "18rem" }}
                        >
                            <img
                                className="img-thumbnail"
                                src={el.image}
                                alt="Card image cap"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{el.name}</h5>
                            </div>
                            <div className="card-footer">
                                <Link
                                    to={`/123/calendar/${el.id}`}
                                    className="btn btn-warning"
                                >
                                    Засах
                                </Link>
                                <button
                                    onClick={() => clickDeleteCard(el.id)}
                                    className="btn btn-danger float-right"
                                >
                                    Устгах
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="clearfix"></div>
            <CardNew />
        </>
    );
};

export default Card;
