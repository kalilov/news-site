import React, {Component}  from 'react';
import './Main.css'
import Posty from '../Main/Posty/Posty'
import axios from '../../apishka/axios-firebase'

class Main extends Component {
    state = {
        results: []
    };
    
    componentDidMount() {
        axios.get('/news.json?orderBy="heading"&limitToLast=3')
        .then (response => {
            console.log(response.data);
            const fetchedResults = [];
            for(let key in response.data){
                fetchedResults.unshift(
                    {
                        ...response.data[key],
                        id:key
                    }
                )
            }
            this.setState({results:fetchedResults})
        });
    };
    render() {
            return (
                <div className="main">
                    <div className="wrapper">
                        <div className="container">
                            <div className="news-cards">
                                <div className="news-card">
                                    {
                                        this.state.results.length > 0 ?
                                        this.state.results.map(post => {
                                            return <Posty 
                                                        key={post.id} 
                                                        post={post} 
                                                        remove={() => { this.handleDeleteElement(post.id) 
                                                    }}/>
                                        }) : 
                                        <h3>Нет постов</h3>
                                    }       
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            );
        };
    }

export default Main;