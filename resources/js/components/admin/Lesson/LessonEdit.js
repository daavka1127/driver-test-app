import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "../../../AxiosUser";

import AlertSuccess from "../Alert/AlertSuccess";
import AlertError from "../Alert/AlertError";

const LessonEdit = (props) => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [lessonName, setLessonName] = useState("");
    const [cardId, setCardId] = useState(null);
    const [lessonID, setLessonID] = useState(0);
    const [successMsg, setSuccessMsg] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        Modal.setAppElement("body");
    }, []);

    useEffect(() => {
        Modal.setAppElement("body");
        setLessonName(props.selectedLessonName);
        setCardId(props.selectedCard);
        setLessonID(props.selectedLessonID);
    }, [props.selectedLessonName, props.selectedCard, props.selectedLessonID]);

    function openModal() {
        if (props.selectedLessonID == 0) {
            alert("Засах мөрөө сонгоно уу.");
            return;
        }
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = "#11729c";
    }

    function closeModal() {
        setIsOpen(false);
        setErrorMsg(null);
        setSuccessMsg(null);
    }

    const changeLessonName = (e) => {
        setLessonName(e.target.value);
    };

    const changeCard = (e) => {
        setCardId(e.target.value);
    };

    const clickSaveLesson = () => {
        if (lessonName == "" || lessonName == null) {
            alert("Хичээлийн нэрээ оруулна уу.");
            return;
        }
        setErrorMsg(null);
        setSuccessMsg(null);
        axios
            .post("/edit/lesson", {
                id: props.selectedLessonID,
                card_id: cardId,
                name: lessonName,
            })
            .then((res) => {
                setSuccessMsg(res.data.msg);
                setErrorMsg(null);
                props.loadLessons(props.selectedCard);
            })
            .catch((err) => {
                setSuccessMsg(null);
                setErrorMsg(err.response.data.msg);
            });
    };

    return (
        <>
            <button className="btn btn-warning" onClick={openModal}>
                Засах
            </button>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                    Хичээл засах хэсэг
                </h2>
                <div className="form-group">
                    <label>Карт: {cardId}</label>{" "}
                    <select
                        className="form-control"
                        defaultValue={props.selectedCard}
                        onChange={changeCard}
                    >
                        {props.cards.map((el) => (
                            <option key={el.id} value={el.id}>
                                {el.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Хичээл: {lessonID}</label>
                    <input
                        type="text"
                        onChange={changeLessonName}
                        className="form-control"
                        value={lessonName}
                    />
                </div>
                <button onClick={clickSaveLesson} className="btn btn-warning">
                    Засах
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

export default LessonEdit;

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
