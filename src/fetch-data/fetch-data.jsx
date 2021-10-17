import {useEffect, useState} from "react";

import axios from "axios";

export function FetchData() {
    const [graphs, setGraphs] = useState([]);

    function getAllGraphs() 
    { axios.get('http://localhost:3001/graphs').then(function (response) {
        setGraphs(response.data)
    }).catch((error) => console.error(error)).then(console.log(graphs))}

    useEffect(() => {getAllGraphs()}, [])

    setTimeout(console.log(graphs), 3000);

    if (graphs === []) {
        return <div>Loading...</div>
    }

    return null;
}