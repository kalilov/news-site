import React from 'react';
import Bi1 from '../../container/img/bisykle1.jpg';
import Bi2 from '../../container/img/bisykle.jpg';
import Bi3 from '../../container/img/bisykle2.jpg';
import './Main.css'

const Main = () => {
    return (
        <div className="main">
            <div className="wrapper">
                <div className="container">
                    <div className="main-block">
                        <img className="bisykle" src={Bi1}/>
                        <img className="bisykle" src={Bi2}/>
                        <img className="bisykle" src={Bi3}/>                        
                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Main;