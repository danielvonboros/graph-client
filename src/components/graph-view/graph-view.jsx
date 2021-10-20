import axios from "axios";

export function GraphView() {

    axios.get(`http://localhost:3001/graphs/:graphId`)

    return null;
}