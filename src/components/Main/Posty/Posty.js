import React, { useState } from 'react';
import './Posty.css'

function Posty({post, remove}) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="news-card">
            <img className="bisykle" src={post.img}/>
            <h2 className="heading">{post.heading}</h2>
            <p className="information" style={{
                height: isOpen ? 'auto' : '0'
            }}>{post.text}</p>
            <div className="email">{post.email}</div>
            <div className="read-delete">
                <a className="read-more" onClick={() => setIsOpen(!isOpen)}>Подробнее</a>
                <button className="delete" onClick={remove}>Удалить</button>
            </div>
        </div>
    );
}

export default Posty;