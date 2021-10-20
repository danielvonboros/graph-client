import axios from 'axios';
import { useState } from 'react';

import './add-graph.css'

export function AddGraph() {
    const [query, setQuery] = useState('');

    function handleNameInput(name){
        setQuery(name);
        console.log(query);
    }

    function handleAddGraph() {
        // e.preventDefault();
        axios.post('http://localhost:3001/add/graph', {
            name: query,
            data: '',
        }).then(function(response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        })
    }

    return (
    <>
        <form className="search-field">
            <input type="text" id="query" placeholder="Name for new graph" className="name-input-field" onChange={(name) => handleNameInput(name)}>

            </input>
            <button className="name-input-button" onClick={() => handleAddGraph()}>Add new Graph</button>
        </form>
    </>)
}