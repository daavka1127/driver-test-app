import React, { useState, useRef } from "react";
import Modal from "react-modal";
import axios from "../../../AxiosUser";

const CardNew = () => {
    let subtitle;
    const newWindow = useRef(window);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [img, setImg] = useState(null);
    const [cardName, setCardName] = useState(null);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = "#11729c";
    }

    function closeModal() {
        setIsOpen(false);
    }

    const changeName = (e) => {
        setCardName(e.target.value);
    };

    const clickSaveCard = () => {
        if (img == null && img === "") {
            alert("Зургаа сонгоно уу.");
            return;
        }
        if (cardName == null && cardName === "") {
            alert("Нэрээ оруулна уу.");
            return;
        }
        axios
            .post("/new/card", {
                drive_type_id: 1,
                name: cardName,
                image: img,
            })
            .then((res) => {
                alert(res.data.msg);
            })
            .catch((err) => {
                alert(err.response.data.msg);
            });
    };

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

    return (
        <div>
            <button className="btn btn-success" onClick={openModal}>
                Нэмэх
            </button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                    Карт нэмэх хэсэг
                </h2>
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
                        type="text"
                        className="form-control"
                    />
                </div>
                <button onClick={clickSaveCard} className="btn btn-success">
                    Нэмэх
                </button>
                <button
                    className="btn btn-danger float-right"
                    onClick={closeModal}
                >
                    Хаах
                </button>
            </Modal>
        </div>
    );
};

export default CardNew;

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        width: "40%",
    },
};
