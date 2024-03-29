import {useEffect, useState} from "react";

import axios from "axios";

import { NavBar } from '../nav-bar/nav-bar';
import { SearchBar } from '../search-bar/search-bar';
import { ListView } from '../list-view/list-view';
import { AddGraph } from "../add-graph/add-graph";

export function Homepage(props) {
    const [graphs, setGraphs] = useState(undefined);
    const [searchInput, setSearchInput] = useState('');

    function getAllGraphs() 
    { axios.get('http://localhost:3001/graphs').then(function (response) {
        setGraphs(response.data);
    }).catch((error) => console.error(error))}

    useEffect(() => {
      getAllGraphs()
    },  []);

    return (
        <div>
            <NavBar graphs={graphs}/>
            <SearchBar className="search-bar" graphs={graphs} onSearchInput={(query) => setSearchInput(query)} /> 
            <AddGraph />
            <ListView graphs={graphs} searchInput={searchInput}/>
        </div>
    );
}