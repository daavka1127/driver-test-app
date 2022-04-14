import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "../Dashboard/Dashboard";
import { BrowserRouter } from "react-router-dom";
const App = () => {
    return (
        <BrowserRouter>
            <Dashboard />
        </BrowserRouter>
    );
};

export default App;
if (document.getElementById("user_contents")) {
    ReactDOM.render(<App />, document.getElementById("user_contents"));
}
