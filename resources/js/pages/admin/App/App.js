import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import SideMenu from "../Layouts/SideMenu";
import HeaderMenu from "../Layouts/HeaderMenu";
import Content from "../Layouts/Content";
import Footer from "../Layouts/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <SideMenu />
            <HeaderMenu />
            <Content />
            <Footer />
        </BrowserRouter>
    );
};

export default App;

if (document.getElementById("mainhgfhfghgfh")) {
    ReactDOM.render(<App />, document.getElementById("mainhgfhfghgfh"));
}
