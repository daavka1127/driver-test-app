import React from "react";
import { Routes, Route } from "react-router-dom";
import Card from "../Card/Card";
import CardEdit from "../Card/CardEdit";
import Lessons from "../Lessons/Lessons";
import Titles from "../Titles/Titles";

const Content = () => {
    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <Routes>
                        <Route path="/123/calendar/" element={<Card />} />
                        <Route
                            path="/123/calendar/:cardId"
                            element={<CardEdit />}
                        />
                        <Route path="123/lessons" element={<Lessons />} />
                        <Route path="123/titles" element={<Titles />} />
                    </Routes>
                </div>
                {/* /.container-fluid */}
            </section>
            {/* /.content */}
        </div>
    );
};

export default Content;
