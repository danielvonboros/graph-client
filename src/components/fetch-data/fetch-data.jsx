import {useEffect, useState} from "react";

import axios from "axios";

import { NavBar } from '../nav-bar/nav-bar';
import { SearchBar } from '../search-bar/search-bar';
import { ListView } from '../list-view/list-view';

export function FetchData(props) {
    const [graphs, setGraphs] = useState(undefined);

    function getAllGraphs() 
    { axios.get('http://localhost:3001/graphs').then(function (response) {
        setGraphs(graphs);
    }).catch((error) => console.error(error))}

    function tryGraph(){
      // eslint-disable-next-line
        alchemy.begin({"dataSource": graphs})
    }
 
    useEffect(() => {
      console.log("use effect");
      getAllGraphs(); tryGraph();
    },  []);

    
    return (
        <div>
            {/* <NavBar graphs={graphs}/>
            <SearchBar graphs={graphs} /> 
            <ListView graphs={graphs}/> */}
            <div id="alchemy" className="alchemy"></div>
        </div>
    );
}