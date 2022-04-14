import React, { useState, useEffect } from "react";
import axios from "../../../AxiosUser";
import DataTable from "react-data-table-component";
import SortIcon from "@material-ui/icons/ArrowDownward";

import LessonNew from "../../../components/admin/Lesson/LessonNew";
import LessonEdit from "../../../components/admin/Lesson/LessonEdit";

const Lessons = () => {
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectedCardName, setSelectedCardName] = useState(null);
    const [lessons, setLessons] = useState([]);
    const [selectedLessonID, setSelectedLessonID] = useState(0);
    const [selectedLessonName, setSelectedLessonName] = useState("");
    const [selectedLessons, setSelectedLessons] = useState([]);

    useEffect(() => {
        loadCards();
    }, []);

    const loadCards = () => {
        axios
            .get("/get/card")
            .then((res) => {
                setCards(res.data);
            })
            .catch();
    };

    const changeCard = (e) => {
        // console.log(e.target.options[e.target.selectedIndex].text);
        setSelectedCardName(e.target.options[e.target.selectedIndex].text);
        setSelectedCard(e.target.value);
        loadLessons(e.target.value);
    };

    const loadLessons = (cardId) => {
        axios
            .get(`/get/lessons/${cardId}`)
            .then((res) => {
                setLessons(res.data);
            })
            .catch((err) => {});
    };

    const handleChange = (state) => {
        setSelectedLessons(state.selectedRows);
        if (state.selectedRows.length > 0) {
            console.log(state.selectedRows[0]);
            // setSelec(state.selectedRows);
            setSelectedLessonID(state.selectedRows[0].id);
            setSelectedLessonName(state.selectedRows[0].name);
        } else {
            setSelectedLessonID(0);
            setSelectedLessonName("");
        }
    };

    const deleteLessons = () => {
        if (selectedLessons.length == 0) {
            alert("Устгах мөрөө сонгоно уу.");
            return;
        }

        axios
            .post("/delete/lesson", {
                ids: selectedLessons,
            })
            .then((res) => {
                alert(res.data.msg);
                loadLessons(selectedCard);
            })
            .catch((err) => {
                alert(err.response.data.msg);
            });
    };

    return (
        <div className="container-flex">
            <div className="row">
                <h2 style={{ textAlign: "center" }}>Хичээл хэсэг</h2>
            </div>
            <div className="clearfix"></div>
            <div className="row">
                <div className="form-group">
                    <label>Картаа сонгоно уу. {selectedCard}</label>
                    <select onChange={changeCard} className="form-control">
                        <option value={-1}>Сонгоно уу</option>
                        {cards.map((el) => (
                            <option key={el.id} value={el.id}>
                                {el.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="row">
                <DataTable
                    title="Хичээлүүд"
                    columns={columns}
                    data={lessons}
                    defaultSortFieldId={1}
                    sortIcon={<SortIcon />}
                    pagination
                    selectableRows
                    onSelectedRowsChange={handleChange}
                    // onRowClicked={getRow}
                />
            </div>
            <div className="form-group">
                <LessonNew
                    selectedCard={selectedCard}
                    selectedCardName={selectedCardName}
                    loadLessons={loadLessons}
                />
                {"  "}
                <LessonEdit
                    selectedLessonID={selectedLessonID}
                    selectedLessonName={selectedLessonName}
                    cards={cards}
                    selectedCard={selectedCard}
                    loadLessons={loadLessons}
                />
                {/* <button className="btn btn-warning">Засах</button> */}
                <button
                    onClick={deleteLessons}
                    className="btn btn-danger float-right"
                >
                    Устгах
                </button>
            </div>
        </div>
    );
};

export default Lessons;

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
        name: "Нэр",
        selector: (row) => row.name,
        sortable: true,
        right: true,
        reorder: true,
    },
];
