import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Header from "../../../components/user/Layouts/Header";
import Footer from "../../../components/user/Layouts/Footer";
import Lesson from "../../user/Lesson/Lesson";
import Exam from "../../user/Exam/Exam";
import Exercise from "../../user/Exercise/Exercise";
const Dashboard = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lesson" element={<Lesson />} />
                <Route path="/exam" element={<Exam />} />
                <Route path="/exercise" element={<Exercise />} />
            </Routes>
            <Footer />
        </>
    );
};

export default Dashboard;
