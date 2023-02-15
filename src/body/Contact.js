import { Grid } from "@mui/material";
import React from "react";
import id from "react-uuid";
import Masonry from "@mui/lab/Masonry";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

function ContactExample() {
  return (
    <section className="contact">
      <div className="container-fluid">
        <h1 className="contact__title">Контакты</h1>
        <div className="contact__body">
          <div className="contact__content">
            <ContactText />
          </div>
          <ContactMap />
        </div>
      </div>
    </section>
  );
}

const ContactMap = () => {
  return (
    <div className="contact__map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2333.8028535880953!2d37.614346177143105!3d54.201274710412974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41344080e14d3aa9%3A0x628e2e05373a9aa0!2z0JjQvNC_0LXRgNCw0YLQvtGA0YHQutC40Lkg0KLRg9C70YzRgdC60LjQuSDQvtGA0YPQttC10LnQvdGL0Lkg0LfQsNCy0L7QtA!5e0!3m2!1sru!2sru!4v1670703573402!5m2!1sru!2sru"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

const ContactText = () => {
  return (
    <ul className="contact__list">
      <li className="contact__item item-contact">
        <h3 className="item-contact__title">{title[0]}</h3>
        <p className="item-contact__text">{text[0]}</p>
      </li>
      <li className="contact__item item-contact">
        <h3 className="item-contact__title">{title[1]}</h3>
        <a className="item-contact__text link" href={link[0]}>
          {text[1]}
        </a>
      </li>
      <li className="contact__item item-contact">
        <h3 className="item-contact__title">{title[2]}</h3>
        <p className="item-contact__text">{text[2]}</p>
      </li>
      <li className="contact__item item-contact">
        <h3 className="item-contact__title">{title[3]}</h3>
        <a className="item-contact__text link" href={link[1]}>
          {text[3]}
        </a>
      </li>
    </ul>
  );
};

const title = [`Адрес:`, `Телефон справочной:`, `ФИО:`, `Электронная почта:`];

const link = [`tel:+74872321499`, `mailto:mail@tulatoz.ru`];

const text = [
  `300002 , Россия, г. Тула ул. Советская, 1 А`,
  `+7 (4872) 32-14-99`,
  `Иванов Иван Иванович`,
  `mail@tulatoz.ru`,
];

export { ContactExample };
