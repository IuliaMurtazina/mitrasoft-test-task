import React, { useRef } from "react";
import { Stack, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  CLEAR_FILTERED_POSTS,
  searchPosts,
  sortPosts,
} from "../../store/reducers/posts";

const SearchBar = () => {
  const dispatch = useDispatch();
  const searchInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    dispatch(searchPosts(searchInputRef.current.value));
  };

  const clearInputHandler = () => {
    if (searchInputRef.current.value === "") dispatch(CLEAR_FILTERED_POSTS());
  };

  const sortPostshandler = (event) => {
    dispatch(sortPosts(event.target.value));
  };

  return (
    <Stack
      className="flex-md-row justify-content-between align-items-center"
      gap={2}
    >
      <Form className="d-flex col-12 col-md-6" onSubmit={submitFormHandler}>
        <Form.Control
          type="search"
          placeholder="Поиск"
          className="me-2"
          ref={searchInputRef}
          onChange={clearInputHandler}
        />
        <Button type="submit" className="btn-secondary">
          Search
        </Button>
      </Form>
      <div className="col-12 col-md-6">
        <Form.Select onChange={sortPostshandler}>
          <option style={{ display: "none" }}>Сортировка</option>
          <option value="increase">От А до Я</option>
          <option value="decrease">От Я до А</option>
        </Form.Select>
      </div>
    </Stack>
  );
};

export default SearchBar;
