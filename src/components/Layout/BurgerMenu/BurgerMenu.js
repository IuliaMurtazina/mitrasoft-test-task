import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SET_MENU_CLOSE } from "../../store/reducers/ui";

const BurgerMenu = ({ showMenu, onHide }) => {
  const dispatch = useDispatch();
  const closeMenuhandler = () => dispatch(SET_MENU_CLOSE());
  return (
    <Offcanvas show={showMenu} onHide={onHide}>
      <Offcanvas.Header closeButton></Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={2}>
          <Link
            to="/"
            className="text-dark text-decoration-none fs-5"
            onClick={closeMenuhandler}
          >
            Список постов
          </Link>
          <Link
            to="/"
            className="text-dark text-decoration-none fs-5"
            onClick={closeMenuhandler}
          >
            Обо мне
          </Link>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default BurgerMenu;
