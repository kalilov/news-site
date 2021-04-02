import React, { useState } from "react";
import "./Add.css";
import axios from "../../apishka/axios-firebase";
import firebase from "../../config/fbConfig";

function Add(props) {
  const [post, setPost] = useState({
    heading: "",
    email: "",
    text: "",
  });
  const [file, setFile] = useState(null);

  function changeHandler(e) {
    setPost((post) => {
      return {
        ...post,
        [e.target.name]: e.target.value,
      };
    });
  }

  function selectHandler(e) {
    setFile(e.target.files[0]);
  }

  function newsHandler(e) {
    e.preventDefault();
    const storageRef = firebase.storage().ref("images/" + file.name);
    const uploadTask = storageRef.put(file);
    uploadTask.on(
      "state_changed",
      () => {},
      () => {},
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          const news = {
            ...post,
            img: url,
          };
          axios.post("/news.json", news).then(() => {});
        });
      }
    );

    e.target.reset();
    
  }

  return (
    <div className="add">
      <div className="container">
        <h1 className="add-title">Поделитесь своей новостью</h1>
        <form onSubmit={newsHandler} className="form">
          <div className="form-inputs">
            <label className="add-form-title">
              Заголовок
              <input
                className="add-form-input"
                type="text"
                name="heading"
                placeholder="Веедите заголовок"
                onChange={changeHandler}
              />
            </label>
            <label className="add-form-title">
              Ваша почта
              <input
                className="add-form-input"
                type="email"
                name="email"
                placeholder="Введите email почту"
                onChange={changeHandler}
              />
            </label>
            <p className="add-form-title">Добавить фото</p>
            <label className="add-form-img">
              Выберите файл
              <input
                className="add-form-input"
                type="file"
                name="photo"
                onChange={selectHandler}
              />
            </label>
            <button className="add-btn">Поделиться</button>
          </div>
          <div className="form-textarea">
            <label className="add-form-title">
              Tекст
              <textarea
                className="add-form-textarea"
                placeholder="Введите текст..."
                name="text"
                onChange={changeHandler}
              ></textarea>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Add;
