import React from "react";
import Img from "../img/img.jpg";

function HomeExample() {
	return (
		<div className="home">
			<MainImage />
			<MainAbout />
		</div>
	);
}

const MainAbout = () => {
	return (
		<div className="about">
			<MainContainer />
		</div>
	);
};

const MainContainer = () => {
	return (
		<div className="container">
			<h2 className="about__title">О КОМПАНИИ</h2>
			{listText}
		</div>
	);
};

const MainImage = () => {
	return (
		<div className="main-screen">
			<img className="main-screen__images" src={Img} />
		</div>
	);
};

const text = [
	`Императорский Тульский оружейный завод основан в 1712 году по
	именному Указу Петра I.`,

	`Предприятию более 300 лет, это старейшее оружейное предприятие
	России. На протяжении трёх веков завод создает свою историю, проходя
	через все вехи развития страны. Сегодня темп работы, заданный
	государством, требует высокоточного оборудования и
	высококвалифицированных кадров. Несмотря на большой возраст,
	предприятие идёт в ногу со временем и оснащено необходимым
	оборудованием, предоставлена возможность работать в современных
	условиях.`,

	`Императорский Тульский оружейный завод сегодня – это опыт, качество,
	традиционность, но в то же время современность, динамика развития,
	стремление вперёд.`,
];
const listText = text.map((text) => <p className="about__text">{text}</p>);

export { HomeExample };