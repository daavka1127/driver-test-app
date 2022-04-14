import React from "react";
import Header from "../../../components/user/Layouts/Header";
import Counts from "../../../components/user/Layouts/Counts";
import Banner from "../../../components/user/Layouts/Banner";
import HomeContent from "../../../components/user/Layouts/HomeContent";
const Home = () => {
    return (
        <>
            <HomeContent />
            <Counts />
            <Banner />
        </>
    );
};

export default Home;
