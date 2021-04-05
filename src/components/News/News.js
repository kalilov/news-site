import React, { Component } from 'react';
import axios from '../../apishka/axios-firebase'
import Posty from '../Main/Posty/Posty'

class News extends Component {
    
    state = {
        results: []
    }

    handleDeleteElement = id => {
        axios.delete(`/news/${id}.json`).then(() => {
            this.setState(prevState => ({
                results: prevState.results.filter(post => post.id !== id)
            }));
        })
      };

    componentDidMount(){
        axios.get('/news.json')
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
        })
    }
    
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    {
                        this.state.results.length > 0 ?
                        this.state.results.map(post => {
                            return <Posty 
                                        key={post.id} 
                                        post={post} 
                                        remove={() =>this.handleDeleteElement(post.id)}
                                    />
                        }) : 
                        <h3>Нет постов</h3>
                    }
                </div>
            </div>
        );
    }
}

export default News;