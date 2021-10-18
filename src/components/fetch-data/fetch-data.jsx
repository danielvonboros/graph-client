import {useEffect, useState} from "react";

import axios from "axios";

import { NavBar } from '../nav-bar/nav-bar';
import { SearchBar } from '../search-bar/search-bar';
import { ListView } from '../list-view/list-view';

export function FetchData(props) {
    const [graphs, setGraphs] = useState([]);

    function getAllGraphs() 
    { axios.get('http://localhost:3001/graphs').then(function (response) {
        setGraphs(response.data)
    }).catch((error) => console.error(error))}

    useEffect(() => {getAllGraphs()}, [])

    if (!graphs) {
        return <div>Loading ...</div>
    }

    return (
        <>
            <NavBar graphs={graphs}/>
            <SearchBar graphs={graphs} />
            <ListView graphs={graphs}/>
        </>
    );
}