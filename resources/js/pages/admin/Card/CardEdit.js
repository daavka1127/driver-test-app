import React, { useRef, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../../../AxiosUser";

import AlertSuccess from "../../../components/admin/Alert/AlertSuccess";
import AlertError from "../../../components/admin/Alert/AlertError";

const CardEdit = () => {
    let params = useParams();
    const newWindow = useRef(window);

    const [img, setImg] = useState(null);
    const [cardName, setCardName] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        axios
            .get(`/get/card/${params.cardId}`)
            .then((res) => {
                setImg(res.data.image);
                setCardName(res.data.name);
            })
            .catch((err) => {});
    }, []);

    const openWindow = () => {
        newWindow.current = window.open(
            "/laravel-filemanager",
            "",
            "width=600,height=400,left=200,top=200"
        );
    };

    window.SetUrl = (url, width, height, alt) => {
        setImg(url[0].url);
        console.log(url);
    };

    const changeName = (e) => {
        setCardName(e.target.value);
    };

    const clickSaveCard = () => {
        if (img === "" || img === null) {
            alert("Зургаа сонгоно уу.");
            return;
        }
        if (cardName === "" || cardName === null) {
            alert("Картын нэрээ оруулна уу.");
            return;
        }
        axios
            .post("/edit/card", {
                drive_type_id: 1,
                name: cardName,
                image: img,
                id: params.cardId,
            })
            .then((res) => {
                setSuccessMsg(res.data.msg);
                setErrorMsg(null);
            })
            .catch((err) => {
                setErrorMsg(err.response.data.msg);
                setSuccessMsg(null);
            });
    };

    return (
        <div className="container">
            <h4
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                }}
            >
                Карт засах
            </h4>
            <div className="form-group">
                <label>Гарчиг: </label>{" "}
                <button onClick={openWindow} className="btn btn-info">
                    <i className="fa fa-image"></i> Зураг сонгох
                </button>
                <br></br>
                {img && <img height="300" src={img} />}
            </div>
            <div className="form-group">
                <label>Гарчиг:</label>
                <input
                    onChange={changeName}
                    value={cardName}
                    type="text"
                    className="form-control"
                />
            </div>
            <button onClick={clickSaveCard} className="btn btn-warning">
                Засах
            </button>
            <Link className="btn btn-danger float-right" to={"/123/calendar"}>
                Буцах
            </Link>
            <div className="clearfix">
                {successMsg && <AlertSuccess msg={successMsg} />}
                {errorMsg && <AlertError msg={errorMsg} />}
            </div>
        </div>
    );
};

export default CardEdit;
