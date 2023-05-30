import React from "react";
import { Button, Stack } from "react-bootstrap";
import classes from "./Header.module.css";
import { List } from "react-bootstrap-icons";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useDispatch, useSelector } from "react-redux";
import { SET_MENU_CLOSE, SET_MENU_OPEN } from "../../store/reducers/ui";

const Header = () => {
  const showMenu = useSelector((state) => state.ui.isMenuOpen);
  const dispatch = useDispatch();

  const closeMenuHandler = () => {
    dispatch(SET_MENU_CLOSE());
  };
  const openMenuHandler = () => {
    dispatch(SET_MENU_OPEN());
  };

  return (
    <header className={classes.header}>
      <Stack direction="horizontal">
        <Button
          variant="secondary"
          onClick={openMenuHandler}
          className={classes["burger-menu-btn"]}
        >
          <List size={24} />
        </Button>
      </Stack>

      <BurgerMenu showMenu={showMenu} onHide={closeMenuHandler} />
    </header>
  );
};

export default Header;
