import React from "react";
import { Link } from "react-router-dom";
import MiniCart from "./MiniCart";

const Header = () => {
    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <Link to={`/`}>
                    <h2>FakeShop</h2>
                </Link>
                <div className="right menu">
                    <MiniCart />
                </div>
            </div>
        </div>
    )
};

export default Header;