import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "../../../AxiosUser";

import AlertSuccess from "../Alert/AlertSuccess";
import AlertError from "../Alert/AlertError";

const LessonNew = (props) => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [lessonName, setLessonName] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        Modal.setAppElement("body");
    }, []);

    function openModal() {
        if (props.selectedCard == -1 || props.selectedCard == null) {
            alert("Картаа сонгоно уу.");
            return;
        }
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = "#11729c";
    }

    function closeModal() {
        setErrorMsg(null);
        setSuccessMsg(null);
        setIsOpen(false);
    }

    const changeLessonName = (e) => {
        setLessonName(e.target.value);
    };

    const clickSaveLesson = () => {
        if (lessonName == "" || lessonName == null) {
            alert("Хичээлийн нэрээ оруулна уу.");
            return;
        }
        axios
            .post("/new/lesson", {
                card_id: props.selectedCard,
                name: lessonName,
            })
            .then((res) => {
                setSuccessMsg(res.data.msg);
                setErrorMsg(null);
                setLessonName(null);
                props.loadLessons(props.selectedCard);
            })
            .catch((err) => {
                setErrorMsg(err.response.data.msg);
                setSuccessMsg(null);
            });
    };

    return (
        <>
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
                    Хичээл нэмэх хэсэг
                </h2>
                <div className="form-group">
                    <label>Карт: {props.selectedCardName}</label>{" "}
                </div>
                <div className="form-group">
                    <label>Хичээл:</label>
                    <input
                        type="text"
                        onChange={changeLessonName}
                        className="form-control"
                        value={lessonName}
                    />
                </div>
                <button onClick={clickSaveLesson} className="btn btn-success">
                    Нэмэх
                </button>
                <button
                    className="btn btn-danger float-right"
                    onClick={closeModal}
                >
                    Хаах
                </button>
                <div className="form-group">
                    {successMsg && <AlertSuccess msg={successMsg} />}
                    {errorMsg && <AlertError msg={errorMsg} />}
                </div>
            </Modal>
        </>
    );
};

export default LessonNew;

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
