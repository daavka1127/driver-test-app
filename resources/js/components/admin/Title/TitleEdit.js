import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "../../../AxiosUser";

import AlertSuccess from "../Alert/AlertSuccess";
import AlertError from "../Alert/AlertError";

const TitleEdit = (props) => {
    let subtitle;
    const [cardId, setCardId] = useState(-1);
    const [lessons, setLessons] = useState([]);
    const [lessonId, setLessonId] = useState(-1);
    const [titleId, setTitleId] = useState(-1);
    const [titleName, setTitleName] = useState("");
    const [modalIsOpen, setIsOpen] = useState(false);
    const [successMsg, setSuccessMsg] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        Modal.setAppElement("body");
    }, []);

    useEffect(() => {
        setLessons(props.lessons);
        setCardId(props.cardId);
        setLessonId(props.lessonId);
        setTitleId(props.titleId);
        setTitleName(props.titleName);
    }, [
        props.lessons,
        props.cardId,
        props.lessonId,
        props.titleId,
        props.titleName,
    ]);

    function openModal() {
        if (props.titleId == -1) {
            alert("Та засах мөрөө сонгоно уу.");
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

    const loadLessons = (cardId) => {
        axios.get(`/get/lessons/${cardId}`).then((res) => {
            setLessons(res.data);
        });
    };

    const changeCard = (e) => {
        setCardId(e.target.value);
        loadLessons(e.target.value);
    };

    const changeLesson = (e) => {
        setLessonId(e.target.value);
    };

    const changeTitleName = (e) => {
        setTitleName(e.target.value);
    };

    const clickSaveTitle = () => {
        if (cardId == -1) {
            alert("Картаа сонгоно уу.");
            return;
        }
        if (lessonId == -1) {
            alert("Хичээлээ сонгоно уу.");
            return;
        }
        if (titleName == null || titleName == "") {
            alert("Гарчигийн нэрээ оруулна уу.");
            return;
        }
        setErrorMsg(null);
        setSuccessMsg(null);

        axios
            .post("/edit/title", {
                id: titleId,
                lesson_id: lessonId,
                title: titleName,
            })
            .then((res) => {
                props.loadTitles(lessonId);
                setSuccessMsg(res.data.msg);
                setErrorMsg(null);
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
                    Гарчиг засах хэсэг
                </h2>
                <div className="form-group">
                    <label>Карт: </label>
                    <select
                        onChange={changeCard}
                        className="form-control"
                        defaultValue={cardId}
                    >
                        <option value={-1}>Сонгоно уу</option>
                        {props.cards.map((el) => (
                            <option key={el.id} value={el.id}>
                                {el.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Хичээл: </label>
                    <select
                        onChange={changeLesson}
                        className="form-control"
                        defaultValue={lessonId}
                    >
                        <option value={-1}>Сонгоно уу</option>
                        {lessons.map((el) => (
                            <option key={el.id} value={el.id}>
                                {el.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Гарчгийн нэр: </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={changeTitleName}
                        value={titleName}
                    />
                </div>
                <button onClick={clickSaveTitle} className="btn btn-warning">
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

export default TitleEdit;

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
