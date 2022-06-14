import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../../AxiosUser";
const LessonCard = () => {
    const [cards, setCards] = useState([]);
    const [imgUrl, setImgUrl] = useState("");
    const [searchValue, setSearchValue] = useState("");

    let allCards = [];
    useEffect(() => {
        getCards();
    }, []);

    const changeSearch = (e) => {
        // setSearchValue(e.target.value);
        // if (e.target.value == "" || e.target.value == null) {
        //     setCards(allCards);
        //     return;
        // }
        // let searchedCards = allCards.filter((el) =>
        //     el.name.toLowerCase().includes(e.target.value)
        // );
        // console.log(searchedCards);
        // setCards(searchedCards);
    };

    const getCards = () => {
        axios
            .get("/get/card")
            .then((response) => {
                setCards(response.data);
                allCards = response.data;
                console.log(allCards);
            })
            .catch((err) => {});
    };

    return (
        <section className="section1">
            <div className="container">
                <div className="row">
                    <div className="col-md-8" />

                    <div className="input-group col-md-4">
                        <input
                            type="text"
                            className="form-control col-md-10"
                            placeholder="Хайх"
                            onChange={changeSearch}
                        />
                        <div className="input-group-append ">
                            <button className="btn btn-success" type="submit">
                                Хайх
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {cards.map((el) => (
                        <div className="col-md-3 p-3" key={el.id}>
                            <div className="card card-custom bg-white border-white border-0">
                                <div
                                    className="card-custom-img"
                                    style={{
                                        backgroundImage: `url("${el.image}")`,
                                    }}
                                />
                                <div className="card-body">
                                    <p className="card-text">{el.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LessonCard;
