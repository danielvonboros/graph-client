import {useState} from "react";

import axios from "axios";

export function FetchData() {
    const [graphs, setGraphs] = useState([]);

    axios.get('/').then(function (response) {
        setGraphs(response)
    }).catch((error) => console.error(error)).then(console.log(graphs));
}