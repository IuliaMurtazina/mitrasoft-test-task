import React from "react";
import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutMePage = () => {
  return (
    <Stack className="p-3">
      <img
        className="align-self-center"
        src="img/ava.jpg"
        alt="Аватарка"
        style={{ width: "100%", maxWidth: "200px" }}
      />
      <p className="align-self-center">
        Привет! Меня зовут Юля, мне 24 года и я - frontend-разработчик.
      </p>
      <p>Чем я могу похвастаться:</p>
      <ul>
        <li>Уверенные знания и практический опыт работы с:</li>
        <li>
          - HTML5, CSS3, препроцессор SASS, опыт кроссбраузерной и адаптивной
          верстки с использованием медиа-запросов.
        </li>
        <li>
          - JavaScript ES6, React 16+, Redux/Redux-toolkit, Redux-Saga,
          React-Router, Next.js.
        </li>
        <li>Базовые знания UI/UX, навыки работы с Photoshop, Figma.</li>
        <li>Опыт работы cо сборщиком проектов Webpack.</li>
        <li>Умение работать с Git.</li>
        <li>Опыт работы с библиотекой Material UI в качестве UI Kit.</li>
        <li>Опыт работы с REST API.</li>
        <li>
          Знания и умение применять на практике принципы SOLID, основные
          паттерны проектирования, ФП, ООП.
        </li>
        <li>Умение работать в команде.</li>
      </ul>
      <p>
        С портфолио можно ознакомиться на GitHub :{" "}
        <Link to="https://github.com/IuliaMurtazina">
          https://github.com/IuliaMurtazina
        </Link>
      </p>
    </Stack>
  );
};

export default AboutMePage;
