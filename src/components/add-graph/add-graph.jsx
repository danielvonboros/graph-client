import axios from 'axios';
import { useState } from 'react';

import './add-graph.css'

export function AddGraph() {
    const [query, setQuery] = useState('');

    function handleNameInput(name){
        setQuery(name);
    }

    console.log(query);

    function handleAddGraph() {
        // e.preventDefault();
        axios.post('http://localhost:3001/add/graph', {
            name: query,
            data :  {
                "nodes": [{
                    "id": "nd_1",
                    "label": "Node 1"}] }
        }).then(function(response) {
            console.log(response);
            window.location.reload();
        }).catch(function (error) {
            console.log(error);
        })
    }

    return (
    <>
        <form className="new-graph-field">
            <input type="text" id="query" placeholder="Name for new graph" className="name-input-field" onChange={(event) => handleNameInput(event.target.value)}>

            </input>
            <button className="name-input-button" onClick={() => handleAddGraph()}>ADD NEW GRAPH</button>
        </form>
    </>)
}