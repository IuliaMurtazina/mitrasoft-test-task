import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./BurgerMenu.module.css";

const BurgerMenu = ({ showMenu, onHide }) => {
  console.log(showMenu);
  return (
    <Offcanvas show={showMenu} onHide={onHide}>
      <Offcanvas.Header closeButton></Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={10}>
          <Link to="/" className={classes.link}>
            Список постов
          </Link>
          <Link to="/" className={classes.link}>
            Обо мне
          </Link>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default BurgerMenu;
