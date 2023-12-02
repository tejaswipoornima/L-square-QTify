import React from "react";
import styles from "./Navbar.module.css"
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import { Link } from "@mui/material";

function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Link to={"/"}>
              <Logo/>  
            </Link>
            <Search placeholder="Search a album of your choice"/>
            <Button>Give Feedback</Button>
        </nav>
    )
}

export default Navbar;