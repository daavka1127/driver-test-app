import React, { useState, useEffect } from "react";
import axios from "../../../AxiosUser";
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/ArrowDownward";

import TitleNew from "../../../components/admin/Title/TitleNew";
import TitleEdit from "../../../components/admin/Title/TitleEdit";

const Titles = () => {
    const [cards, setCards] = useState([]);
    const [cardId, setCardId] = useState(-1);
    const [lessons, setLessons] = useState([]);
    const [lessonId, setlessonId] = useState(-1);
    const [titles, setTitles] = useState([]);
    const [titleId, setTitleId] = useState(-1);
    const [titleName, setTitleName] = useState("");
    const [selectedTitles, setSelectedTitles] = useState([]);
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

    const loadLessons = (cardId) => {
        axios.get(`/get/lessons/${cardId}`).then((res) => {
            setLessons(res.data);
        });
    };

    const loadTitles = (lessonId) => {
        axios.get(`/get/titles/${lessonId}`).then((res) => {
            setTitles(res.data);
        });
    };

    const changeCard = (e) => {
        setCardId(e.target.value);
        loadLessons(e.target.value);
    };

    const changeLesson = (e) => {
        setlessonId(e.target.value);
        loadTitles(e.target.value);
    };

    const handleChange = (state) => {
        setSelectedTitles(state.selectedRows);
        if (state.selectedRows.length > 0) {
            // console.log(state.selectedRows[0]);
            // setSelec(state.selectedRows);
            setTitleId(state.selectedRows[0].id);
            setTitleName(state.selectedRows[0].title);
        } else {
            setTitleId(-1);
            setTitleName("");
        }
    };

    const deleteTitles = () => {
        axios
            .post("/delete/title", {
                ids: selectedTitles,
            })
            .then((res) => {
                alert(res.data.msg);
                loadTitles(lessonId);
            })
            .catch((err) => {
                alert(err.response.data.msg);
            });
    };

    return (
        <div className="container-flex">
            <div className="row">
                <h4 style={{ textAlign: "center" }}>Хичээлийн гарчиг</h4>
                <div className="clearfix"></div>
            </div>
            <div className="row">
                <div className="form-group">
                    <label>Картаа сонгоно уу.</label>
                    <select onChange={changeCard} className="form-control">
                        <option value={-1}>Сонгоно уу</option>
                        {cards.map((el) => (
                            <option key={el.id} value={el.id}>
                                {el.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Хичээлээ сонгоно уу.</label>
                    <select onChange={changeLesson} className="form-control">
                        <option value={-1}>Сонгоно уу</option>
                        {lessons.map((el) => (
                            <option key={el.id} value={el.id}>
                                {el.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="row">
                <DataTable
                    title="Гарчигууд"
                    columns={columns}
                    data={titles}
                    defaultSortFieldId={1}
                    sortIcon={<SortIcon />}
                    pagination
                    selectableRows
                    onSelectedRowsChange={handleChange}
                    // onRowClicked={getRow}
                />
            </div>
            <div className="form-group">
                <TitleNew cards={cards} loadTitles={loadTitles} />
                {"  "}
                <TitleEdit
                    cards={cards}
                    lessons={lessons}
                    cardId={cardId}
                    lessonId={lessonId}
                    titleId={titleId}
                    titleName={titleName}
                    loadTitles={loadTitles}
                />
                <button
                    onClick={deleteTitles}
                    className="btn btn-danger float-right"
                >
                    Устгах
                </button>
            </div>
        </div>
    );
};

export default Titles;

const columns = [
    {
        id: 1,
        name: "id",
        selector: (row) => row.id,
        sortable: true,
        reorder: true,
    },
    // {
    //     id: 2,
    //     name: "Card id",
    //     selector: (row) => row.card_id,
    //     sortable: true,
    //     reorder: true,
    // },
    {
        id: 3,
        name: "Гарчиг",
        selector: (row) => row.title,
        sortable: true,
        right: true,
        reorder: true,
    },
];
