import React, { useState } from "react";
import styles from "./style/PhotoGallery.module.css";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([
    {
      title: "Sunset at the beach",
      description: "A beautiful sunset view from the beach",
      imgUrl:
        "https://www.pixelstalk.net/wp-content/uploads/2016/08/Sunset-Beaches-Backgrounds.jpg",
    },
    {
      title: "Mountain landscape",
      description: "A breathtaking view of mountain landscape",
      imgUrl:
        "https://img.theculturetrip.com/1440x/smart/wp-content/uploads/2017/08/1200px-bachalpsee_reflection.jpg",
    },
    {
      title: "Atacama Desert",
      description:
        "Aerial photography of desert under blue and white sky photo",
      imgUrl:
        "https://images.unsplash.com/photo-1577717707588-58e49821e851?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      title: "Tall Tower",
      description: "A tall tower sitting on top of a lush green field photo",
      imgUrl:
        "https://images.unsplash.com/photo-1654107298576-6e45f7285066?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },
    {
      title: "Snow Field",
      description:
        "A snow covered field with trees and a house in the distance photo",
      imgUrl:
        "https://images.unsplash.com/photo-1682706961584-58a621e56652?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    {
      title: "Green Hills",
      description: "An aerial view of green hills and valleys photo",
      imgUrl:
        "https://images.unsplash.com/photo-1681814306954-7ac24e322f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    },
  ]);

  const [newPhoto, setNewPhoto] = useState({
    title: "",
    description: "",
    imgUrl: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPhoto((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setPhotos([...photos, newPhoto]);
    setNewPhoto({ title: "", description: "", imgUrl: "" });
  };

  return (
    <div className={styles.photoGallery}>
      <h1 className={styles.title}>Photo Gallery</h1>
      <ul className={styles.photoList}>
        {photos.map((photo, index) => (
          <li key={index} className={styles.photo}>
            <img
              src={photo.imgUrl}
              alt={photo.title}
              className={styles.photoImg}
            />
            <h3 className={styles.photoTitle}>{photo.title}</h3>
            <p className={styles.photoDescription}>{photo.description}</p>
          </li>
        ))}
      </ul>
      <form className={styles.photoFormField} onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Judul Foto"
          name="title"
          value={newPhoto.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Deskripsi Foto"
          name="description"
          value={newPhoto.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="URL Foto"
          name="imgUrl"
          value={newPhoto.imgUrl}
          onChange={handleInputChange}
        />
        <button className={styles.photoFormSubmit} type="submit">
          Tambah Foto
        </button>
      </form>
    </div>
  );
};

export default PhotoGallery;