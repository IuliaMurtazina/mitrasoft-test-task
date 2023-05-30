import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const BurgerMenu = ({ showMenu, onHide }) => {
  return (
    <Offcanvas show={showMenu} onHide={onHide}>
      <Offcanvas.Header closeButton></Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={2}>
          <Link to="/" className="text-dark text-decoration-none fs-5">
            Список постов
          </Link>
          <Link to="/" className="text-dark text-decoration-none fs-5">
            Обо мне
          </Link>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default BurgerMenu;
