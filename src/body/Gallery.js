import Img from "../img/img.jpg";
import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function GalleryExample(props) {
  return (
    <section className="gallery">
      <div className="container-fluid">
        <h1 className="title">Галерея</h1>
        <GalleryImage />
      </div>
    </section>
  );
}

const Gallery = (props) => {
  return <main className="main"></main>;
};

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const GalleryImage = () => {
  return (
    <ImageList variant="quilted" cols={4} rowHeight={300}>
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
const itemData = [
  {
    img: Img,
    title: "Breakfast",
  },
  {
    img: Img,
    title: "Burger",
    rows: 2,
  },
  {
    img: Img,
    title: "Camera",
  },
  {
    img: Img,
    title: "Coffee",
  },
  {
    img: Img,
    title: "Hats",
  },
  {
    img: Img,
    title: "Honey",
    cols: 2,
  },
  {
    img: Img,
    title: "Basketball",
    cols: 2,
  },
  {
    img: Img,
    title: "Fern",
  },
  {
    img: Img,
    title: "Mushrooms",
  },
];

export { GalleryExample };
