import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css"
import btnClasses from "../button/MyButton.module.css"

const Navbar = () => {
    return (
        <div className={classes.myNavbar}>
            <div className={classes.navbar__links}>
                <Link to="/about" className={btnClasses.myBtn} >About</Link>
                <Link to="/posts" className={btnClasses.myBtn}>Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;