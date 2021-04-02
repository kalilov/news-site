import React from 'react';
import './Posty.css'

function Posty(post, remove) {
    return (
        <div className="news-card">
            <img className="bisykle" src={post.img}/>
            <h2 className="heading">{post.heading}</h2>
            <p className="information">{post.text}</p>
            <div className="email">{post.email}</div>
            <button className="read-more">Подробнее</button>
            <button className="delete" onClick={remove}>Удалить</button>
        </div>
    );
}

export default Posty;